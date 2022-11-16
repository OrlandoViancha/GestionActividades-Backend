const Student=require("../models/student");
const addStudent=async(req,res,next)=>{

    const student=new Student(req.body);

    await student.save();

    res.sendStatus(200);
}

module.exports = {addStudent};