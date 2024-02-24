import React, { useState } from "react";
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

function Prompt(props: any) {
  let [commandLine, setCommandLine] = useState("");
  let [idArrowPicker, setIdArrowPicker] = useState(0);
  let addHistoryLine = props.addHistoryLine;
  let history: HistoryLine[] = props.history;
  let onKeyDown = (e: any) => {
    if (isArrowWithShiftDown(e)) {
      removeAllBehave(e);
    }
    if (isUpDown(e)) {
      removeAllBehave(e);
      let idArrowPickerValue = idArrowPicker;
      if (idArrowPicker > 0) {
        idArrowPickerValue = idArrowPickerValue - 1;
        setCommandLine(history[idArrowPickerValue].command);
      }
      setIdArrowPicker(idArrowPickerValue);
    }
    if (isDownDown(e)) {
      removeAllBehave(e);
      let idArrowPickerValue = idArrowPicker;
      if (idArrowPicker < history.length - 1) {
        idArrowPickerValue = idArrowPickerValue + 1;
        setCommandLine(history[idArrowPickerValue].command);
      }
      setIdArrowPicker(idArrowPickerValue);
    }
    if (isTabDown(e)) {
      removeAllBehave(e);
      // afficher les propositions possibles dans une response en dessous
      // remplacer la response conseillée par une nouvelle reponse conseillee au réappui
    }
    if (isTabShiftDown(e)) {
      removeAllBehave(e);
    }
    if (isCtrlCDown(e)) {
      removeAllBehave(e);
      const length = history.length;
      addHistoryLine(new HistoryLine(new Date(), commandLine, undefined));
      setIdArrowPicker(length + 1);
      setCommandLine("");
    }
    if (isEnterDown(e)) {
      removeAllBehave(e);
      const length = history.length;
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
          setIdArrowPicker(length + 1);
          setCommandLine("");
          window.scrollTo(0, document.body.offsetHeight);
        });
    }
  };

  let onChangeCommandLine = (e: any) => {
    setCommandLine(e.target.value);
  };

  return (
    <div className="prompt-container">
      <Name />
      <textarea
        className="prompt"
        rows={1}
        onKeyDown={onKeyDown}
        value={commandLine}
        onChange={onChangeCommandLine}
      />
    </div>
  );
}

export default Prompt;
