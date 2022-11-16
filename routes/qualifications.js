const express = require('express');
const Router=express.Router();
const {addQualification,updateQualification}=require('../controllers/controller_qualifications')

Router.post('/:id',addQualification);
Router.put('/:id',updateQualification);

module.exports = Router;