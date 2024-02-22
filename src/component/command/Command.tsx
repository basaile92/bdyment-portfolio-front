import React from "react";
import "./Command.css";
import Name from "../name/Name";

function Command(props: any) {
  return (
    <div className="command-container">
      <Name />
      <div className="command">{props.children}</div>
    </div>
  );
}

export default Command;
