import React from "react";
import { Link } from "react-router-dom";

function ButtonMore(props) {
  return (
    <React.Fragment>
      {!props.hidden && (
        <span
          style={styles.button}
          uk-icon="icon:chevron-down;ratio:1.25"
          className="uk-box-shadow-small"
          onClick={props.onMore}
        ></span>
      )}
    </React.Fragment>
  );
}

const styles = {
  button: {
    border: "1.3px solid #757575",
    borderRadius: "80px",
    cursor: "pointer",
    padding: "5px",
    color: "#757575",
    backgroundColor: "rgba(255, 249, 196, 0.6)",
  },
};

export default ButtonMore;
