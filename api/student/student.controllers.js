const Course = require("../../models/Course");
const Student = require("../../models/Student");

const getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.find();
    return res.status(200).json(students);
  } catch (error) {
    next(error);
  }
};

const createStudent = async (req, res, next) => {
  try {
    const courses = req.body.courses;
    const newStudent = await Student.create(req.body);
    const updateCourses = await Course.updateMany(
      { _id: courses },
      { $push: { students: newStudent._id } }
    );
    return res.status(200).json(newStudent);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllStudents, createStudent };
