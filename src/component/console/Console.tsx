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
  return (
    <div className="void">
      <Bar />
      <label className="selection-area-console">
        <div className="console">
          {history.map((historyLine) => (
            <div key={historyLine.date}>
              <Command>{historyLine.command}</Command>
              {historyLine.response && (
                <Response>{historyLine.response}</Response>
              )}
            </div>
          ))}
          <Prompt addHistoryLine={addHistoryLine} history={history}></Prompt>
        </div>
      </label>
    </div>
  );
}

export default Console;
