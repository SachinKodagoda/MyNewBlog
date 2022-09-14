import React from "react";

const DivideCircle = (props) => {
  return (
    <svg
      className="feather feather-divide-circle"
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
      <line x1="8" x2="16" y1="12" y2="12" />
      <line x1="12" x2="12" y1="16" y2="16" />
      <line x1="12" x2="12" y1="8" y2="8" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
};

export default DivideCircle;
