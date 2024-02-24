import React, { useState } from "react";
import "./Console.css";
import Command from "../command/Command";
import Response from "../response/Response";
import Prompt from "../prompt/Prompt";
import Bar from "../bar/Bar";
import HistoryLine from "../../model/history-line";

function Console() {
  const [history, setHistory] = useState<HistoryLine[]>([]);
  const addHistoryLine = (historyLine: HistoryLine) => {
    setHistory([...history, historyLine]);
  };
  const clearHistory = () => {
    setHistory([]);
  };
  return (
    <div>
      <Bar />
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
      <label htmlFor="prompt" className="selection-area-console"></label>
    </div>
  );
}

export default Console;
