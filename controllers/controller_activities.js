const Activity = require("../models/activity");
const Matter = require("../models/matter");
const Student = require("../models/student");

const getActivities = async (req, res, next)=>{
  try {
    const activities = await Activity.find({});
    res.send(activities);
  } catch (error) {
    
  }
}

const getActivitiesById = async (req, res, next) => {
  try {
    const { matter } = req.params;
    const student = await Student.findById("63762573e5d7321dbfd845ef");
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
    const objectActivity={id:id,qualification:0}
    student.activities = student.activities.concat(objectActivity);
    await student.save();
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
};

const updateActivity = async (req, res, next) => {};

module.exports = { getActivities,getActivitiesById, addActivity, updateState, updateActivity };
