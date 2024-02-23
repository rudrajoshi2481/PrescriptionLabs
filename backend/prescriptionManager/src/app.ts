import express from "express";

const app = express();

app.use(express.json())

app.get("/ping", (req, res) => {
    res.send("Hellow World");
});
app.use("/patient", require("./routes/patientModification"));


app.listen(9001, () => {
  console.log("Prescription Manager Started At port : 9001");
});
