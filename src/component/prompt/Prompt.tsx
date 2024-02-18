import React from 'react';
import './Prompt.css';
import Name from "../name/Name";

function Prompt() {

    let isEnterDown = (e: any) => {return e.keyCode === 13 && e.shiftKey === false};
    let isArrowWithShiftDown = (e: any) => {return e.shiftKey === true && e.keyCode >= 37 && e.keyCode <= 40};
    let onKeyDown = (e: any) => {
        if(isArrowWithShiftDown(e)) {
            e.preventDefault();
        }

        if(isEnterDown(e)) {
            e.preventDefault();
            //this.myFormRef.submit();
        }
    }


    return (
        <div className="prompt-container">
            <Name/><textarea className="prompt" rows={1} onKeyDown={onKeyDown}/>
        </div>
    );
}

export default Prompt;
