"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
function page() {
  const [userName, setuserName] = useState("rudra");
  const [password, setPassword] = useState("51235123");
  const handelSubmit = (e: any) => {
    const d = { userName, password };

    signIn("credentials", { ...d, redirect: true, callbackUrl: "/" });
  };
  return (
    <div className="flex justify-center items-center h-[60vh]">
      <div>
        <form>
          <Label>User Name:</Label>
          <Input
            onSubmit={(e) => {
              handelSubmit(e);
            }}
            placeholder="user name"
            type="text"
            value={userName}
            onChange={(e) => {
              setuserName(e.target.value);
            }}
          />
          <div className="mt-3">
            <Label>Password:</Label>
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="mt-6">
            <Button type="submit">Subitm</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
