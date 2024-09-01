import React from "react";

const AutoplayProgress = ({ progressCircle, progressContent }) => {
  return (
    <div className="absolute right-4 bottom-4 z-10 w-12 h-12 flex items-center justify-center font-bold text-primary">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 48 48"
        ref={progressCircle}
        style={{
          strokeDashoffset: "calc(125.6px * (1 - var(--progress)))",
          strokeDasharray: "125.6",
          transform: "rotate(-90deg)",
        }}
      >
        <circle
          cx="24"
          cy="24"
          r="20"
          className="stroke-current stroke-4 fill-none"
        ></circle>
      </svg>
      <span ref={progressContent}></span>
    </div>
  );
};

export default AutoplayProgress;
