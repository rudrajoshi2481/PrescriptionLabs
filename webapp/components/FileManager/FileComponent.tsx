import React from "react";

function FileComponent() {
  return (
    <div className="flex hover:bg-slate-200 p-1 px-2 justify-between cursor-pointer border-b-2">
      <p className="flex justify-center items-center">
        <svg
        className="mr-3"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
        >
          <path
            d="M10.5.5l.354-.354L10.707 0H10.5v.5zm3 3h.5v-.207l-.146-.147-.354.354zm-1 10.5h-10v1h10v-1zM2 13.5v-12H1v12h1zM2.5 1h8V0h-8v1zM13 3.5v10h1v-10h-1zM10.146.854l3 3 .708-.708-3-3-.708.708zM2.5 14a.5.5 0 01-.5-.5H1A1.5 1.5 0 002.5 15v-1zm10 1a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zM2 1.5a.5.5 0 01.5-.5V0A1.5 1.5 0 001 1.5h1z"
            fill="currentColor"
          ></path>
        </svg>
        <p>File Name</p>
      </p>
      <p>Commits</p>
      <p>Hours</p>
    </div>
  );
}

export default FileComponent;
