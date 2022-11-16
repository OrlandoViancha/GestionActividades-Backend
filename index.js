const express=require('express');
const app=express();
const path = require('path');
const qualifications=require('./routes/qualifications');
const matters=require('./routes/matters');
const activities=require('./routes/activities');
const students=require('./routes/students');
const cors=require('cors');
require('./data/connect_db');

//Se usa para acceder a la API desde el navegador 
app.use(cors());

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rutas

app.use('/qualifications',qualifications)
app.use('/matters',matters)
app.use('/activities',activities)
app.use('/students',students)
//Se define el puerto del servidor
app.set('port',process.env.PORT || 3001);

//Se inicia el servidor
app.listen(app.get('port'),()=>{

    console.log(`listening on port ${app.get('port')}`);
})