"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const CreateGiteaUser_1 = require("../logic/CreateGiteaUser");
const listEmails_1 = require("../logic/listEmails");
const createPatientRepo_1 = require("../logic/createPatientRepo");
const router = express_1.default.Router();
const prisma = new client_1.PrismaClient();
router.post("/create-patient", (req, res) => {
    console.log("Create-Patient", req.body);
    const { firstName, lastName, phNumber, gender, diet, pincode, address, dobMonth, dobYear, userName, dobDate, email, nationality, } = req.body;
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
        .then((rep) => __awaiter(void 0, void 0, void 0, function* () {
        (0, CreateGiteaUser_1.CreateGiteaUser)({ email, userName });
        const repp = yield (0, createPatientRepo_1.CreatePatientRepo)({ userName });
        res.send({ msg: "User Created", status: 200 });
    }))
        .catch((err) => {
        console.log(err);
        res.send({ msg: "Error Creating User", status: 400 });
    });
});
router.get("/list", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rep = yield (0, listEmails_1.listAllEmails)();
    console.log(rep.data);
    res.send({ msg: JSON.stringify(rep.data), status: 200 });
}));
router.post("/patient-repo-details", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body.user;
    //   const rep = await getPatientDetails({ user });
    console.log("patient-repo-details");
    res.send({ msg: "", status: 200 });
}));
router.get("/delete-patient", (req, res) => {
    res.send("Send from pat modification");
});
router.get("/update-patient", (req, res) => {
    res.send("Send from pat modification");
});
module.exports = router;
