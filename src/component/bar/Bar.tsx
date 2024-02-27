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
        <div className="button" onClick={downloadCV}>
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
          </svg>
        </div>
        <div className="button" onClick={showHelp}>
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Bar;
