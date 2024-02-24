"use client"

import { NewSparkels } from "@/components/ui/NewSparkel";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SparklesCore } from "@/components/ui/sparkel";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

const ProteinModel = dynamic(() => import("@/components/ProteinHomePage/ModalBox"), {
  ssr: false,
  loading:() => {
    return <p className="text-3xl justify-center flex mt-52">Loading ...</p>
  }
});
function page() {
  return (
    <div className="w-[100vw] h-[80vh]">
      <div className="flex">
      <div className="w-[60vw] h-[60vh]">
      <ProteinModel />
      
      </div>
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-6xl  font-bold">Prescription-Labs</h1>  
        <p className=" text-2xl mt-3 text-center">A seamless way to save and alalyze patient data, to predict genetic or demographics outbreak.</p>
        <Link href="/physician/dashboard"><Button className="min-w-[20vh] mt-3"> Dashboard</Button></Link>
      </div>
      </div>
      <Separator />
    </div>
  );
}

export default page;
