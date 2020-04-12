import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function LoadingSpinner({ type, color, size }) {
  const { promiseInProgress } = usePromiseTracker();
  return (
    // promiseInProgress && (
    //   <div className="uk-text-center">
    //     <Loader type={type} color={color} height={size} width={size} />
    //   </div>
    // )
    <Loader type={type} color={color} height={size} width={size} />
  );
}

LoadingSpinner.defaultProps = {
  type: "TailSpin",
  color: "#000",
  size: 50,
};

export default LoadingSpinner;
