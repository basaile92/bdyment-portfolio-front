import React from "react";
import "./Response.css";

function Response(props: any) {
  return (
    <div
      className="response"
      dangerouslySetInnerHTML={{ __html: props.children }}
    />
  );
}

export default Response;
