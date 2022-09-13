import React from "react";

const Sunset = (props) => {
  return (
    <svg
      className="feather feather-sunset"
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
      <path d="M17 18a5 5 0 0 0-10 0" />
      <line x1="12" x2="12" y1="9" y2="2" />
      <line x1="4.22" x2="5.64" y1="10.22" y2="11.64" />
      <line x1="1" x2="3" y1="18" y2="18" />
      <line x1="21" x2="23" y1="18" y2="18" />
      <line x1="18.36" x2="19.78" y1="11.64" y2="10.22" />
      <line x1="23" x2="1" y1="22" y2="22" />
      <polyline points="16 5 12 9 8 5" />
    </svg>
  );
};

export default Sunset;
