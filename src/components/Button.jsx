import React from "react";

function Button(props) {
  const { size, disabled } = props;
  let auxClass = null;
  const baseClass = "uk-button uk-button-default";
  if (size == "small") auxClass = "uk-button-small";
  else if (size == "large") auxClass = "uk-button-large";
  const cls = auxClass ? `${baseClass} ${auxClass}` : baseClass;
  return <button className={cls}>{props.children}</button>;
}

Button.defaultProps = {
  size: null,
  disabled: false,
};

const styles = {
  button: {
    border: "1.5px solid #ddd",
    borderRadius: "80px",
    cursor: "pointer",
    padding: "5px",
  },
};

export default Button;
