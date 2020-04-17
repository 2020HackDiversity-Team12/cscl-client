import React from "react";
import { Link } from "react-router-dom";

function Logo({ size }) {
  return (
    <Link to="/" className="uk-logo uk-text-uppercase">
      <span style={{ fontSize: getSize(size), ...styles.logo }}>
        <span style={styles.c}>c</span>
        <span style={styles.s}>s</span>
        <span style={styles.cc}>c</span>
        <span style={styles.l}>l</span>
      </span>
    </Link>
  );
}

function getSize(size) {
  switch (size) {
    case "sm":
      return "25px";
    case "md":
      return "45px";
    case "lg":
      return "100px";
    case "xlg":
      return "100px";
  }
}

Logo.defaultProps = {
  size: "md",
};

const styles = {
  logo: {
    fontWeight: "bold",
    textShadow: "1px 1px 3px rgba(60, 60, 60, 0.5)",
  },
  c: { color: "#1E88E5" },
  cc: { color: "#D32F2F" },
  s: { color: "#FBC02D" },
  l: { color: "#00796B" },
};

export default Logo;
