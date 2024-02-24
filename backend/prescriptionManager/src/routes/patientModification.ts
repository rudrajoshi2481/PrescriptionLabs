import express from "express";
import { PrismaClient } from "@prisma/client";
import { CreateGiteaUser } from "../logic/CreateGiteaUser";
import { listAllEmails } from "../logic/listEmails";
import { CreatePatientRepo } from "../logic/createPatientRepo";
const router = express.Router();
const prisma = new PrismaClient();

router.post("/create-patient", (req, res) => {
  console.log("Create-Patient", req.body);

  const {
    firstName,
    lastName,
    phNumber,
    gender,
    diet,
    pincode,
    address,
    dobMonth,
    dobYear,
    userName,
    dobDate,
    email,
    nationality,
  }: any = req.body;
  res.send("Working");
  prisma.user
    .create({
      data: {
        createdAt: Date.now().toString(),
        dob: {
          date: dobDate,
          month: dobMonth,
          year: dobYear,
        },
        email: email,
        firstName: firstName,
        lastName: lastName,
        phNumber: phNumber,
        userName: userName,
        address: address,
        coordinates: {
          latitude: "5123",
          longitude: "5123",
        },
        gender: gender,
        nationality: nationality,
        pincode: pincode,
        vegan: null,
      },
    })
    .then(async (rep) => {
      CreateGiteaUser({ email, userName });
      const repp = await CreatePatientRepo({ userName });
      res.send({ msg: "User Created", status: 200 });
    })
    .catch((err:any) => {
        console.log(err)
      res.send({ msg: "Error Creating User", status: 400 });
    });
});

router.get("/list", async (req, res) => {
  const rep = await listAllEmails();
  console.log(rep.data);
  res.send({ msg: JSON.stringify(rep.data), status: 200 });
});

router.post("/patient-repo-details", async (req, res) => {
  const user = req.body.user;
  //   const rep = await getPatientDetails({ user });

  console.log("patient-repo-details");

  res.send({ msg: "", status: 200 });
});

router.get("/delete-patient", (req, res) => {
  res.send("Send from pat modification");
});

router.get("/update-patient", (req, res) => {
  res.send("Send from pat modification");
});

module.exports = router;
