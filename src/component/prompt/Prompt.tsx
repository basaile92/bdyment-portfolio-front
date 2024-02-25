import React, { useEffect, useRef, useState } from "react";
import "./Prompt.css";
import Name from "../name/Name";
import submitCommand from "../../service/console-service";
import {
  isArrowWithShiftDown,
  isCtrlCDown,
  isDownDown,
  isEnterDown,
  isTabDown,
  isTabShiftDown,
  isUpDown,
  removeAllBehave,
} from "../../utils/keyboard-utils";
import HistoryLine from "../../model/history-line";
import {
  adviseACommandWhoStartWith,
  adviseCommandsWhoStartWith,
} from "../../service/tab-service";
import { separateByTab } from "../../utils/separation-utils";
import Response from "../response/Response";

function Prompt(props: any) {
  let [commandLine, setCommandLine] = useState("");
  let [indexArrowPicker, setIndexArrowPicker] = useState(0);
  let [indexTabulationPicker, setIndexTabulationPicker] = useState(0);
  let [inTabulationMode, setInTabulationMode] = useState(false);
  let [tabulationModeArray, setTabulationModeArray] = useState<string[]>([]);
  let [tabulationModeValue, setTabulationModeValue] = useState<string>("");
  const ref = useRef<HTMLDivElement>(null);
  let addHistoryLine = props.addHistoryLine;
  let clearHistory = props.clearHistory;
  let history: HistoryLine[] = props.history;
  useEffect(() => {
    if (history.length) {
      ref.current?.scrollIntoView({
        block: "end",
      });
    }
    if (history.length === 0) {
      setIndexArrowPicker(0);
    }
  }, [history.length]);
  useEffect(() => {
    if (!inTabulationMode) {
      setIndexTabulationPicker(0);
      setTabulationModeArray([]);
      setTabulationModeValue("");
    }
  }, [inTabulationMode]);
  let onKeyDown = (e: any) => {
    if (isArrowWithShiftDown(e)) {
      removeAllBehave(e);
    }
    if (isUpDown(e)) {
      removeAllBehave(e);
      let idArrowPickerValue = indexArrowPicker;
      if (indexArrowPicker > 0) {
        idArrowPickerValue = idArrowPickerValue - 1;
        setCommandLine(history[idArrowPickerValue].command);
      }
      setIndexArrowPicker(idArrowPickerValue);
    }
    if (isDownDown(e)) {
      removeAllBehave(e);
      let idArrowPickerValue = indexArrowPicker;
      if (indexArrowPicker < history.length - 1) {
        idArrowPickerValue = idArrowPickerValue + 1;
        setCommandLine(history[idArrowPickerValue].command);
      }
      if (indexArrowPicker === history.length - 1) {
        idArrowPickerValue = idArrowPickerValue + 1;
        setCommandLine("");
      }
      setIndexArrowPicker(idArrowPickerValue);
    }
    if (isTabDown(e)) {
      removeAllBehave(e);
      if (!inTabulationMode) {
        setTabulationModeValue(commandLine);
        const adviseArray = adviseCommandsWhoStartWith(tabulationModeValue);
        setTabulationModeArray(adviseArray);
        setInTabulationMode(true);
      }
      const newCommandLineValue = adviseACommandWhoStartWith(
        tabulationModeValue,
        indexTabulationPicker,
      );
      setCommandLine(newCommandLineValue + " ");
      const indexTabulationNewValue = indexTabulationPicker + 1;
      setIndexTabulationPicker(indexTabulationNewValue);
      ref.current?.scrollIntoView({
        block: "end",
      });
    }
    if (!isTabDown(e)) {
      setInTabulationMode(false);
    }
    if (isTabShiftDown(e)) {
      removeAllBehave(e);
    }
    if (isCtrlCDown(e)) {
      removeAllBehave(e);
      const length = history.length;
      addHistoryLine(new HistoryLine(new Date(), commandLine, undefined));
      setIndexArrowPicker(length + 1);
      setCommandLine("");
    }
    if (isEnterDown(e)) {
      removeAllBehave(e);
      const length = history.length;
      if (commandLine.split(" ")[0] === "clear") {
        clearHistory();
        setCommandLine("");
      } else
        submitCommand(commandLine)
          .then((response) =>
            addHistoryLine(new HistoryLine(new Date(), commandLine, response)),
          )
          .catch(() =>
            addHistoryLine(
              new HistoryLine(
                new Date(),
                commandLine,
                // TODO: use ERROR
                "The command line is not available because server is down.",
              ),
            ),
          )
          .finally(() => {
            setIndexArrowPicker(length + 1);
            setCommandLine("");
          });
    }
  };

  let onChangeCommandLine = (e: any) => {
    setCommandLine(e.target.value);
  };

  return (
    <div>
      <div className="prompt-container">
        <Name />
        <textarea
          id={"prompt"}
          className="prompt"
          rows={1}
          onKeyDown={onKeyDown}
          value={commandLine}
          onChange={onChangeCommandLine}
        />
      </div>
      {inTabulationMode && tabulationModeArray.length > 0 && (
        <Response>{tabulationModeArray.reduce(separateByTab)}</Response>
      )}
      <div ref={ref}></div>
    </div>
  );
}

export default Prompt;
