import express from "express";
import { PrismaClient } from "@prisma/client";
const router = express.Router();
const prisma = new PrismaClient();

router.post("/create-patient", (req, res) => {
  console.log("Create-Patient", req.body);


//   prisma.user.create({
//     data: {
//       createdAt: Date.now().toString(),
//       dob: {
//         date: 7,
//         month: 5,
//         year: 2004,
//       },
//       email: "rudrajoshi@gmai.com",
//       firstName: "rudra",
//       lastName: "joshi",
//       password: "51235123",
//       giteaId: "someting",
//       giteaPasswd: "passwd",
//       phNumber: 8155046603,
//       address: "i live hear",
//       age: 23,
//       cast: "hindu",
//       coordinates: {
//         latitude:5123,
//         longitude:5123,
//       },
//       gender: "male",
//       nationality: "indian",
//       offSpringsId: ["asdfaf"],
//       parentsId: {
//         fatherId:"asdfa",
//         motherId:"asdfasd"
//       },
//       pincode: "51232",
//       vegan: true,
//     },
  }).then((rep) => {
    console.log("Create-Patient REP",rep)
  }).catch(err => {
    console.log("Create-Patient ERROR",err)
  });

//   prisma.user.create({
//     data: {
//       createdAt: Date.now().toString(),
//       dob: {
//         date: req.body.dobDate,
//         month: req.body.dobMonth,
//         year: req.body.dobYear,
//       },
//       email: req.body.email,
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       password: req.body.password,
//       giteaId: req.body.giteaId,
//       giteaPasswd: req.body.giteaPasswd,
//       phNumber: req.body.phNumber,
//       address: req.body.address,
//       age: req.body.age,
//       cast: req.body.cast,
//       coordinates: req.body.coordinates,
//       gender: req.body.gender,
//       nationality: req.body.nationality,
//       offSpringsId: req.body.offSpringsId,
//       parentsId: req.body.parentsId,
//       pincode: req.body.pincode,
//       vegan: req.body.vegan,
//     },
//   }).then((rep) => {
//     console.log("Create-Patient REP",rep)
//   }).catch(err => {
//     console.log("Create-Patient ERROR",err)
//   });

  res.send("done");
});

router.get("/delete-patient", (req, res) => {
  res.send("Send from pat modification");
});

router.get("/update-patient", (req, res) => {
  res.send("Send from pat modification");
});

module.exports = router;
