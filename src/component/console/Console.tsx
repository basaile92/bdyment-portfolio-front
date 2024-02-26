import React, { useState } from "react";
import "./Console.css";
import Command from "../command/Command";
import Response from "../response/Response";
import Prompt from "../prompt/Prompt";
import Bar from "../bar/Bar";
import HistoryLine from "../../model/history-line";
import Help from "../help/Help";

function Console() {
  const [history, setHistory] = useState<HistoryLine[]>([]);
  const [helpDisplayed, setHelpDisplayed] = useState(false);
  const addHistoryLine = (historyLine: HistoryLine) => {
    setHistory([...history, historyLine]);
  };
  const clearHistory = () => {
    setHistory([]);
  };
  return (
    <div>
      <Help helpDisplayed={helpDisplayed} setHelpDisplayed={setHelpDisplayed} />
      <Bar helpDisplayed={helpDisplayed} setHelpDisplayed={setHelpDisplayed} />
      <br />
      <div className="console">
        {history.map((historyLine) => (
          <div key={historyLine.date}>
            <br />
            <Command>{historyLine.command}</Command>
            {historyLine.response && (
              <div>
                <br />
                <Response>{historyLine.response}</Response>
              </div>
            )}
          </div>
        ))}
        <br />
        <Prompt
          addHistoryLine={addHistoryLine}
          history={history}
          clearHistory={clearHistory}
        ></Prompt>
      </div>
    </div>
  );
}

export default Console;
