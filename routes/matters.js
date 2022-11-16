
const express=require('express');
const Router=express.Router();
const bodyParser = require("body-parser");

const{getMatters,getMatter,addMatter}=require('../controllers/controller_matters')

Router.get('/',getMatters);
Router.get('/:id',getMatter);
Router.post('/',addMatter);

module.exports=Router;