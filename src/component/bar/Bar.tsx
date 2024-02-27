import React from "react";
import "./Bar.css";
import help from "../../icon/help.png";
import download from "../../icon/download.png";

function Bar(props: any) {
  let downloadCV = () => {
    const link = document.createElement("a");
    link.download = "basile_dyment_cv.pdf";
    link.href =
      "https://bdyment-portfolio-front-bucket.s3.eu-west-3.amazonaws.com/cv.pdf";
    link.target = "_blank";
    link.click();
  };

  let showHelp = () => props.setHelpDisplayed(!props.helpDisplayed);

  return (
    <div className="bar-container">
      <div className="title-content">basile dyment</div>
      <div className="button-container">
        <button className="button" onClick={downloadCV}>
          <img className="icon" src={download} />
        </button>
        <button className="button" onClick={showHelp}>
          <img className="icon" src={help} />
        </button>
      </div>
    </div>
  );
}

export default Bar;
