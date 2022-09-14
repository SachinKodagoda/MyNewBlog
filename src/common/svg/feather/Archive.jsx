import React from "react";

const Archive = (props) => {
  return (
    <svg
      className="feather feather-archive"
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
      <polyline points="21 8 21 21 3 21 3 8" />
      <rect height="5" width="22" x="1" y="3" />
      <line x1="10" x2="14" y1="12" y2="12" />
    </svg>
  );
};

export default Archive;
