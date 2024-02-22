import React, { useState } from "react";
import "./Console.css";
import Command from "../command/Command";
import Response from "../response/Response";
import Prompt from "../prompt/Prompt";
import Bar from "../bar/Bar";
import HistoryLine from "../../model/history-line";

function Console() {
  const [history, setHistory] = useState<HistoryLine[]>([]);
  return (
    <div>
      <Bar />
      <label>
        <div className="console">
          {history.map((historyLine) => (
            <div>
              <Command>{historyLine.command}</Command>
              <Response>{historyLine.response}</Response>
            </div>
          ))}
          <Prompt></Prompt>
        </div>
      </label>
    </div>
  );
}

export default Console;
