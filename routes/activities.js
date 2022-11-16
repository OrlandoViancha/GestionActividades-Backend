const express = require('express');
const Router=express.Router();
const bodyParser = require("body-parser");
const {getActivities,addActivity,updateState,updateActivity}=require('../controllers/controller_activities')
Router.use(bodyParser.json());

Router.get('/:matter', getActivities);
Router.post('/:id',addActivity);
Router.put('/:id',updateState);
//Router.put('/:id',updateActivity);

module.exports = Router;