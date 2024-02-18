import React from 'react';
import './Response.css';
import Name from "../name/Name";

function Response(props:any) {
    return (
        <div className="response">
            {props.children}
        </div>
    );
}

export default Response;
