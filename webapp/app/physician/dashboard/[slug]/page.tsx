"use client";
import FileManager from "@/components/FileManager/FileManager";
import HeaderComponent from "@/components/FileManager/HeaderComponent";
import { PrescriptionManager_URL } from "@/config";
import axios from "axios";
import React, { useEffect } from "react";

function Page({ params }: { params: { slug: string } }) {
  // get all the files and folders

  useEffect(() => {
    // fetch pat using slug

    axios
      .post(`${PrescriptionManager_URL}/patient/patient-repo-details`, {
        user: params.slug,
      })
      .then((res) => {
        console.log("patient repo details", res);
      })
      .catch((err: any) => {
        console.log("EROR PATIENT REPO DETAILS", err);
      });
  }, []);
  // update files and folders

  return (
    <div>
      <div className="flex   mx-[5vw] flex-col min-w-[60vw]">
        <HeaderComponent email={params.slug} />
        <FileManager />
      </div>
    </div>
  );
}

export default Page;

// export default function Page({ params }: { params: { slug: string } }) {
//   return <div>My Post: {params.slug}</div>;
// }
