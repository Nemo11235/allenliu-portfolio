import React from "react";
import "./ButtonDown.scss";

const Button = (props) => {
  return <button onClick={props.onClick}>{props.label}</button>;
};

export default Button;
