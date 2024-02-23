import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getSession, useSession } from "next-auth/react";

function Appbar() {
  const { data, status, update } = useSession();
  //
  console.log(data?.user);

  return (
    <div className="flex m-2 w-[100vw] justify-between p-3 align-middle">
      <div>
        <Link href={"/"}>
          <h1 className="font-bold">Prescription-Labs</h1>
        </Link>
      </div>
      <div>
        <ul className="flex">
          <li className="px-3">
            <Link href={"/settings"}>Settings</Link>
          </li>
          <li className="px-3">
            <Link href={"/physician/dashboard"}>Physician Dashboard</Link>
          </li>
        </ul>
      </div>
      <div>
        {/*add  */}
        {data && (
          <div className="flex pr-3 items-center">
            <p className="pr-2">{data.user?.email}</p>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        )}
      </div>
    </div>
  );
}

export default Appbar;
