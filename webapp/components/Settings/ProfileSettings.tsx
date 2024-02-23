"use client"
import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

function ProfileSettings() {
  return (
    <div>
      <h1 className="font-bold text-2xl w-[full] mt-6">Profile Settings</h1>
      <div className="mt-3 p-3 border-2 w-[full]">
        <h1 className="font-bold">SignOut</h1>
        <p>want to log out from account?</p>
        <Button
          className="bg-red-500"
          onClick={() => {
            signOut();
          }}
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
}

export default ProfileSettings;
