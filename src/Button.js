import React from "react";

const Button = (props) => {
  console.log(props);
  return (
    <div className="tooltip-container">
      <button id="hover-btn">Hover Over Me</button>
      <span className={`tooltip ${props.position || "top"}`}>
        {props.content ? props.content : "ToolTip"}
      </span>
    </div>
  );
};

export default Button;
