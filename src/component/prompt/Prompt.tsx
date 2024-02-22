import React from "react";
import "./Prompt.css";
import Name from "../name/Name";

function Prompt() {
  const isEnterDown = (e: any) => {
    return e.keyCode === 13 && e.shiftKey === false;
  };
  const isArrowWithShiftDown = (e: any) => {
    return e.shiftKey === true && e.keyCode >= 37 && e.keyCode <= 40;
  };
  const isTabDown = (e: any) => {
    return e.shiftKey === false && e.keyCode === 9;
  };
  let isTabShiftDown = (e: any) => {
    return e.shiftKey === true && e.keyCode === 9;
  };
  const removeAllBehave = (e: any) => e.preventDefault();
  let onKeyDown = (e: any) => {
    if (isArrowWithShiftDown(e)) {
      removeAllBehave(e);
    }
    if (isTabDown(e)) {
      removeAllBehave(e);
      // afficher les propositions possibles dans une response en dessous
      // remplacer la response conseillée par une nouvelle reponse conseillee au réappui
      // effacer la response conseillee au enter.
    }
    if (isTabShiftDown(e)) {
      removeAllBehave(e);
    }
    if (isEnterDown(e)) {
      removeAllBehave(e);
    }
  };

  return (
    <div className="prompt-container">
      <Name />
      <textarea className="prompt" rows={1} onKeyDown={onKeyDown} />
    </div>
  );
}

export default Prompt;
