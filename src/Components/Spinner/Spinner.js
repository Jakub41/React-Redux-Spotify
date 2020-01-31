import React from "react";
import Loader from "react-loader-spinner";

export const Spinner = props => {
  return (
    <div
      style={{
        display: props.displaySpinner ? "block" : "none",
        position: "relative",
        zIndex: "91209190"
      }}
    >
      <Loader
        type="Audio"
        color="#e84e0f"
        height={100}
        width={100}
        timeout={10000}
      />
    </div>
  );
};
