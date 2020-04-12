import React from "react";
import { Link } from "react-router-dom";

function Logo({ size }) {
  return (
    <Link to="/" className="uk-logo uk-text-uppercase">
      <span style={{ fontSize: getSize(size) }}>cscl</span>
    </Link>
  );
}

function getSize(size) {
  switch (size) {
    case "sm":
      return "35px";
    case "lg":
      return "80px";
    case "xlg":
      return "100px";
  }
}

Logo.defaultProps = {
  size: "lg",
};

const styles = {
  logo: {
    fontWeight: "bold",
    fontFamily: "Georgia",
  },
};

export default Logo;
