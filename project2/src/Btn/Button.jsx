import React from "react";
import "./Button.scss";

const Button = ({ children, color = "" }) => {
  return (
    <button
      className={
        "button__css " +
        (color === "darkBlue" ? " button__css-darkBlue" : "") +
        (color === "green" ? " button__css-green" : "") +
        (color === "yellow" ? " button__css-yellow" : "") +
        (color === "blue" ? " button__css-blue" : "")
        // (color === "darkBlue"
        //   ? "button__css-darkBlue"
        //   : color === "green"
        //   ? "button__css-green"
        //   : color === "yellow"
        //   ? "button__css-yellow"
        //   : "button__css-blue")
      }
    >
      {children}
    </button>
  );
};

export default Button;
