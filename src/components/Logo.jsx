import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="uk-logo uk-text-uppercase">
      <span style={styles.c}>c</span>
      <span style={styles.s}>s</span>
      <span style={styles.c}>c</span>
      <span style={styles.l}>l</span>
    </Link>
  );
}

Logo.defaultProps = {
  size: 50,
};

const styles = {
  c: { color: "red" },
  s: { color: "blue" },
  l: { color: "green" },
};

export default Logo;
