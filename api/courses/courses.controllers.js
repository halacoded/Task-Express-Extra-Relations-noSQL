const Course = require("../../models/Course");
const Student = require("../../models/Student");

const getAllCourses = async (req, res, next) => {
  try {
    const courses = await Course.find();
    return res.status(200).json(courses);
  } catch (error) {
    next(error);
  }
};

const createcourse = async (req, res, next) => {
  try {
    const students = req.body.students;
    const newCourse = await Course.create(req.body);

    const updateStudent = await Student.updateMany(
      { _id: students },
      { $push: { courses: newCourse._id } }
    );
    return res.status(200).json(newCourse);
  } catch (error) {
    next(error);
  }
};
module.exports = { getAllCourses, createcourse };
