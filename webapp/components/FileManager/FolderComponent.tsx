import React from "react";

function FolderComponent() {
  return (
    <div className="flex justify-between hover:bg-slate-200 p-1 px-2 cursor-pointer border-b-2">
      <p className="flex justify-center items-center">
      <svg
        viewBox="0 0 15 15"
        className="mr-3"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
      >
        <path
          d="M.5 12.5v-10a1 1 0 011-1h4l2 2h6a1 1 0 011 1v8a1 1 0 01-1 1h-12a1 1 0 01-1-1z"
          stroke="currentColor"
        ></path>
      </svg>
      <p>File Name</p>
      </p>
      <p>Commits</p>
      <p>Hours</p>
    </div>
  );
}

export default FolderComponent;
