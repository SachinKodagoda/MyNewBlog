import React from "react";

const Sidebar = (props) => {
  return (
    <svg
      className="feather feather-sidebar"
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
      <rect height="18" width="18" rx="2" ry="2" x="3" y="3" />
      <line x1="9" x2="9" y1="3" y2="21" />
    </svg>
  );
};

export default Sidebar;
