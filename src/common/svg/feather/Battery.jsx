import React from "react";

const Battery = (props) => {
  return (
    <svg
      className="feather feather-battery"
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
      <rect height="12" width="18" rx="2" ry="2" x="1" y="6" />
      <line x1="23" x2="23" y1="13" y2="11" />
    </svg>
  );
};

export default Battery;
