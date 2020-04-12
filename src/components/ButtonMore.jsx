import React from "react";
import { Link } from "react-router-dom";

function ButtonMore(props) {
  return (
    <React.Fragment>
      <span style={styles.button} uk-icon="icon:chevron-down;ratio:1.6"></span>
      &nbsp;
      {props.children}
    </React.Fragment>
  );
}

const styles = {
  button: {
    border: "1.5px solid #ddd",
    borderRadius: "80px",
    cursor: "pointer",
    padding: "5px",
  },
};

export default ButtonMore;
