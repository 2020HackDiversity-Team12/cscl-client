import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  let auxClass = null;
  let button = null;
  const { size, disabled, to } = props;
  const baseClass =
    "uk-button uk-button-default uk-box-shadow-small uk-border-rounded";

  if (size == "small") auxClass = "uk-button-small";
  else if (size == "large") auxClass = "uk-button-large";
  const cls = auxClass ? `${baseClass} ${auxClass}` : baseClass;
  const disabledStyle = disabled ? styles.disabled : {};
  if (to) {
    button = (
      <Link
        className={cls}
        {...props}
        style={{ ...styles.disabled, ...styles.button }}
      >
        {props.children}
      </Link>
    );
  } else {
    button = (
      <button className={cls} {...props} style={disabledStyle}>
        {props.children}
      </button>
    );
  }
  return button;
}

Button.defaultProps = {
  size: null,
  disabled: false,
  to: "",
};

const styles = {
  button: {
    cursor: "pointer",
  },
  disabled: {
    backgroundColor: "#f5f5f5",
    color: "#aaa",
  },
};

export default Button;
