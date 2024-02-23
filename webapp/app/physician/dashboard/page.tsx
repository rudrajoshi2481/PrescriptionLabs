"use client"
import { AlertDialogHeader } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { PrescriptionManager_URL } from "@/config";
import { toast } from "sonner";

function Page() {
  const [search, setsearch] = useState("");
  const [selectedFilter, setselectedFilter] = useState("email");
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [list, setList] = useState(["asdfasf", "asdfasdf"]);
  const [btnLoading, setBtnLoading] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phNumber: "",
    gender: "",
    dobDay: "",
    dobMonth: "",
    dobYear: "",
    diet: "",
    address: "",
  });

  const handelSearchChange = (e: any) => {
    e.preventDefault();
  };

  const handelSubmit = (e: any) => {
    e.preventDefault();
    setBtnLoading(true);
    axios
      .post(`${PrescriptionManager_URL}/patient/create-patient`, { ...data })
      .then(() => {
        toast("Created Patient succesfully");
      })
      .catch((err) => {
        toast("Error Creating User");
      });
    setBtnLoading(false);
  };

  return (
    <div className="relative">
      {/* <h1>Dashboard</h1> */}
      <div className="max-w-[98vw] my-3 flex justify-center flex-row">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="phone-number">Phone Number</SelectItem>
            <SelectItem value="email">Email</SelectItem>
          </SelectContent>
        </Select>
        <Input
          onChange={(e) => {
            setsearch(e.target.value);
            handelSearchChange(e);
          }}
          className="max-w-[60vw]"
          placeholder="Patient Id"
        />
        <Dialog defaultOpen={true}>
          <DialogTrigger>
            <Button className="ml-3">Create Patient</Button>
          </DialogTrigger>
          <DialogContent className="min-w-[750px]">
            <AlertDialogHeader>
              <DialogTitle>Create New Patient</DialogTitle>
              <DialogDescription>
                <form onSubmit={(e) => handelSubmit(e)}>
                  <div className="flex gap-3">
                    <div>
                      <Label className="mb-2">First Name:</Label>
                      <Input
                        placeholder="Rudra"
                        onChange={(e) => {
                          setData({ ...data, firstName: e.target.value });
                        }}
                      />
                    </div>
                    <div>
                      <Label className="mb-2">Last Name:</Label>
                      <Input
                        placeholder="Joshi"
                        onChange={(e) => {
                          setData({ ...data, lastName: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                  <div className="my-5">
                    <Label className="mb-2 ">Phone Number:</Label>
                    <Input
                      placeholder="+91 6354545454"
                      onChange={(e) => {
                        setData({ ...data, phNumber: e.target.value });
                      }}
                    />
                  </div>
                  <div className="my-5 flex gap-3">
                    <div>
                      <Label className="mb-2 ">Gender:</Label>
                      <Select
                        onValueChange={(e) => {
                          setData({ ...data, gender: e });
                        }}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="mb-2 ">Diet:</Label>
                      <Select
                        onValueChange={(e) => {
                          setData({ ...data, diet: e });
                        }}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Vegan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="vegetarian">Vegetarian</SelectItem>
                          <SelectItem value="non-vegetarian">
                            Non-Vegetarian
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="mt-5 flex gap-5">
                    <div>
                      <Label className="mb-2 ">Day:</Label>
                      <Input
                        type="number"
                        placeholder="04"
                        onChange={(e) => {
                          setData({ ...data, dobDay: e.target.value });
                        }}
                      />
                    </div>
                    <div>
                      <Label className="mb-2 ">Month:</Label>
                      <Input placeholder="08" type="number" />
                    </div>
                    <div>
                      <Label className="mb-2 ">Year:</Label>
                      <Input placeholder="2001" type="number"/>
                    </div>
                  </div>
                  <div className="mt-5">
                    <Label className="mb-2 ">Address:</Label>
                    <Textarea
                      placeholder="23, maheshwar nagar socity vadodara"
                      onChange={(e) => {
                        setData({ ...data, address: e.target.value });
                      }}
                    />
                  </div>
                  <Button
                    disabled={btnLoading}
                    type="submit"
                    className="mt-3 float-right"
                  >
                    Submit
                  </Button>
                </form>
              </DialogDescription>
            </AlertDialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <div className="mx-32 mt-12 flex flex-wrap  gap-4 ">
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
      </div>
    </div>
  );
}

const DisplayCard = () => {
  return (
    <div>
      <Card className="min-w-[250px] max-w-[350px] rounded-sm hover:cursor-pointer shadow-none">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>
            <p>+91 8155046603</p>
            <p>23, maheshwar nagar socity subhanpura vadodara...</p>
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Page;
