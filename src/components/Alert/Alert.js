import React from "react";

export const Alert = (props) => {
  return (
    <div 
        className={"alert" + props.className} 
        role="alert"
    >
        {props.message}
    </div>
  );
};
