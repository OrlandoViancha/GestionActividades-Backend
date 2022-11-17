const Student=require("../models/student");
const addStudent=async(req,res,next)=>{

    const student=new Student(req.body);

    await student.save();

    res.sendStatus(200);
}

const getStudent = async (req, res, next) => {
    try {
        const { id } = req.params;
        const student = await Student.findById(id);
        res.send(student);
    } catch (error) {
        res.sendStatus(500);
    }
    
    
    
}

module.exports = {addStudent,getStudent};