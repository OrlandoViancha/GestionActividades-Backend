const express=require('express');
const Router=express.Router();
const bodyParser = require("body-parser");
Router.use(bodyParser.json());
const {addStudent,getStudent}=require('../controllers/controller_student')

Router.post('/',addStudent);
Router.get('/:id',getStudent);

module.exports=Router;