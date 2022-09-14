import React from "react";

const Check = (props) => {
  return (
    <svg
      className="feather feather-check"
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
};

export default Check;
