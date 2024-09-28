const express = require("express");
const { getAllStudents, createStudent } = require("./student.controllers");
const studentRouter = express.Router();

studentRouter.get("/", getAllStudents);
studentRouter.post("/", createStudent);
module.exports = studentRouter;
