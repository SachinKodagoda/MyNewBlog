import React from "react";

const Voicemail = (props) => {
  return (
    <svg
      className="feather feather-voicemail"
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
      <circle cx="5.5" cy="11.5" r="4.5" />
      <circle cx="18.5" cy="11.5" r="4.5" />
      <line x1="5.5" x2="18.5" y1="16" y2="16" />
    </svg>
  );
};

export default Voicemail;
