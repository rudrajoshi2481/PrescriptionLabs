import React from "react";

function HeaderComponent({ email }: any) {
  return (
    <div className="flex items-center">
      <p>
        <svg
        className="mr-3"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
        >
          <path
            d="M3 14.5v.5h1v-.5H3zm8 0v.5h1v-.5h-1zm-7 0v-2H3v2h1zM6.5 10h2V9h-2v1zm4.5 2.5v2h1v-2h-1zM8.5 10a2.5 2.5 0 012.5 2.5h1A3.5 3.5 0 008.5 9v1zM4 12.5A2.5 2.5 0 016.5 10V9A3.5 3.5 0 003 12.5h1zM7.5 3A2.5 2.5 0 005 5.5h1A1.5 1.5 0 017.5 4V3zM10 5.5A2.5 2.5 0 007.5 3v1A1.5 1.5 0 019 5.5h1zM7.5 8A2.5 2.5 0 0010 5.5H9A1.5 1.5 0 017.5 7v1zm0-1A1.5 1.5 0 016 5.5H5A2.5 2.5 0 007.5 8V7zm-6-6h12V0h-12v1zm12.5.5v12h1v-12h-1zM13.5 14h-12v1h12v-1zM1 13.5v-12H0v12h1zm.5.5a.5.5 0 01-.5-.5H0A1.5 1.5 0 001.5 15v-1zm12.5-.5a.5.5 0 01-.5.5v1a1.5 1.5 0 001.5-1.5h-1zM13.5 1a.5.5 0 01.5.5h1A1.5 1.5 0 0013.5 0v1zm-12-1A1.5 1.5 0 000 1.5h1a.5.5 0 01.5-.5V0z"
            fill="currentColor"
          ></path>
        </svg>
      </p>
      <h1 className="font-semibold my-9 text-2xl">{email}</h1>
    </div>
  );
}

export default HeaderComponent;
