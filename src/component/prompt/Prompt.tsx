import React, { useEffect, useRef, useState } from "react";
import "./Prompt.css";
import Name from "../name/Name";
import HistoryLine from "../../model/history-line";
import { separateByTab } from "../../utils/separation-utils";
import Response from "../response/Response";
import {
  isArrowWithShiftDown,
  isCtrlCTyped,
  isDownTyped,
  isEnterDown,
  isTabShiftTyped,
  isTabTyped,
  isUpTyped,
  removeAllBehave,
} from "../../utils/keyboard-utils";
import {
  adviseACommandWhoStartWith,
  adviseCommandsWhoStartWith,
} from "../../service/advise-service";
import submitCommand from "../../service/console-service";
import { serverError } from "../../service/error-service";

function Prompt(props: any) {
  let [isLoading, setIsLoading] = useState(false);
  let [commandLine, setCommandLine] = useState("");
  let [indexHistoryCommandPicker, setIndexHistoryCommandPicker] = useState(0);
  let [indexAdvisePicker, setIndexAdvisePicker] = useState(0);
  let [adviseModeActivated, setAdviseModeActivated] = useState(false);
  let [adviseArray, setAdviseArray] = useState<string[]>([]);
  let [valueToAdvise, setValueToAdvise] = useState<string>("");
  const refToScrollDown = useRef<HTMLDivElement>(null);
  let addHistoryLine = props.addHistoryLine;
  let clearHistory = props.clearHistory;
  let history: HistoryLine[] = props.history;
  useEffect(() => {
    if (history.length > 0) {
      scrollDown();
    }
    if (history.length === 0) {
      resetHistoryPicker();
    }
  }, [history.length]);
  useEffect(() => {
    if (!adviseModeActivated) {
      resetAdviseMode();
    }
  }, [adviseModeActivated]);

  let scrollDown = () => {
    refToScrollDown.current?.scrollIntoView({
      block: "end",
    });
  };

  let resetAdviseMode = () => {
    setIndexAdvisePicker(0);
    setAdviseArray([]);
    setValueToAdvise("");
  };

  const resetHistoryPicker = () => {
    setIndexHistoryCommandPicker(0);
  };

  let onChangeCommandLine = (e: any) => {
    setCommandLine(e.target.value);
  };

  let retrievePreviousCommand = () => {
    let indexHistoryCommandPickerValue = indexHistoryCommandPicker;
    if (indexHistoryCommandPicker > 0) {
      indexHistoryCommandPickerValue = indexHistoryCommandPickerValue - 1;
      setCommandLine(history[indexHistoryCommandPickerValue].command);
    }
    setIndexHistoryCommandPicker(indexHistoryCommandPickerValue);
  };

  let retrieveNextCommand = () => {
    let indexHistoryCommandPickerValue = indexHistoryCommandPicker;
    if (indexHistoryCommandPicker < history.length - 1) {
      indexHistoryCommandPickerValue = indexHistoryCommandPickerValue + 1;
      setCommandLine(history[indexHistoryCommandPickerValue].command);
    }
    if (indexHistoryCommandPicker === history.length - 1) {
      indexHistoryCommandPickerValue = indexHistoryCommandPickerValue + 1;
      setCommandLine("");
    }
    setIndexHistoryCommandPicker(indexHistoryCommandPickerValue);
  };

  let advise = () => {
    if (!adviseModeActivated) {
      setValueToAdvise(commandLine);
      const adviseArray = adviseCommandsWhoStartWith(valueToAdvise);
      setAdviseArray(adviseArray);
      setAdviseModeActivated(true);
    }
    const newCommandLineValue = adviseACommandWhoStartWith(
      valueToAdvise,
      indexAdvisePicker,
    );
    setCommandLine(newCommandLineValue + " ");
    const indexTabulationNewValue = indexAdvisePicker + 1;
    setIndexAdvisePicker(indexTabulationNewValue);
    scrollDown();
  };

  let deactivateAdviseMode = () => {
    setAdviseModeActivated(false);
  };

  let giveUp = () => {
    const length = history.length;
    addHistoryLine(new HistoryLine(commandLine, undefined));
    setIndexHistoryCommandPicker(length + 1);
    setCommandLine("");
  };

  let submit = () => {
    setIsLoading(true);
    const length = history.length;
    if (commandLine.split(" ")[0] === "clear") {
      clearHistory();
      setCommandLine("");
    } else
      submitCommand(commandLine)
        .then((response) =>
          addHistoryLine(new HistoryLine(commandLine, response)),
        )
        .catch(() =>
          addHistoryLine(new HistoryLine(commandLine, serverError())),
        )
        .finally(() => {
          setIndexHistoryCommandPicker(length + 1);
          setCommandLine("");
          setIsLoading(false);
        });
  };

  let onKeyDown = (e: any) => {
    if (isArrowWithShiftDown(e)) {
      removeAllBehave(e);
    }
    if (isUpTyped(e)) {
      removeAllBehave(e);
      retrievePreviousCommand();
    }
    if (isDownTyped(e)) {
      removeAllBehave(e);
      retrieveNextCommand();
    }
    if (isTabTyped(e)) {
      removeAllBehave(e);
      advise();
    }
    if (!isTabTyped(e)) {
      deactivateAdviseMode();
    }
    if (isTabShiftTyped(e)) {
      removeAllBehave(e);
    }
    if (isCtrlCTyped(e)) {
      removeAllBehave(e);
      giveUp();
    }
    if (isEnterDown(e)) {
      removeAllBehave(e);
      submit();
    }
  };

  return (
    <div>
      <div className="prompt-container">
        <Name />
        <textarea
          id={"prompt"}
          className="prompt"
          autoCapitalize="none"
          autoComplete="off"
          rows={1}
          onKeyDown={onKeyDown}
          value={commandLine}
          onChange={onChangeCommandLine}
          disabled={isLoading}
        />
      </div>
      {adviseModeActivated && adviseArray.length > 0 && (
        <Response>{adviseArray.reduce(separateByTab)}</Response>
      )}
      <div ref={refToScrollDown}></div>
    </div>
  );
}

export default Prompt;
