const express = require("express");
const { getAllCourses, createcourse } = require("./courses.controllers");
const courseRouter = express.Router();

courseRouter.get("/", getAllCourses);
courseRouter.post("/", createcourse);
module.exports = courseRouter;
