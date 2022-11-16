const express=require('express');
const Router=express.Router();
const bodyParser = require("body-parser");
Router.use(bodyParser.json());
const {addStudent}=require('../controllers/controller_student')

Router.post('/',addStudent);

module.exports=Router;