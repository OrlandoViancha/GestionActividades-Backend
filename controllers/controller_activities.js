const Activity = require("../models/activity");
const Matter = require("../models/matter");
const Student = require("../models/student");

const getActivities = async (req, res, next) => {
  try {
    const { matter } = req.params;
    const student = await Student.findById("636eba1692623589ddc3e6d7");
    const require = await Activity.find({ matter: matter });

    res.send({ result: require, student: student });
  } catch (error) {
    res.sendStatus(500);
  }
};
const addActivity = async (req, res, next) => {
  try {
    const { id } = req.params;

    const matter = await Matter.findById(id);

    const newActivity = new Activity(req.body);

    const savedActivity = await newActivity.save();

    matter.activities = matter.activities.concat(savedActivity._id);
    await matter.save();

    res.sendStatus(200);
  } catch (error) {
    res.send(error);
  }
};

const updateState = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { idStudent } = req.body;
    const student = await Student.findById(idStudent);
    console.log(student.activities);
    student.activities = student.activities.concat(id);
    await student.save();
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
};

const updateActivity = async (req, res, next) => {};

module.exports = { getActivities, addActivity, updateState, updateActivity };
