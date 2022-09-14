import React from "react";

const ChevronUp = (props) => {
  return (
    <svg
      className="feather feather-chevron-up"
      height="24"
      width="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg" {...props}
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
};

export default ChevronUp;
