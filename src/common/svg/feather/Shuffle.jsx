import React from "react";

const Shuffle = (props) => {
  return (
    <svg
      className="feather feather-shuffle"
      height="24"
      width="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points="16 3 21 3 21 8" />
      <polyline points="21 16 21 21 16 21" />
      <line x1="4" x2="21" y1="20" y2="3" />
      <line x1="15" x2="21" y1="15" y2="21" />
      <line x1="4" x2="9" y1="4" y2="9" />
    </svg>
  );
};

export default Shuffle;
