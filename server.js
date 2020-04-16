const express = require('express');

const{ db } = require('../NodeFinal/db')
const todoRoute = require('./routes/todos')
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/',express.static(__dirname+'/public'));

app.use('/todos',todoRoute)


db.sync()
  .then(()=>{
    app.listen(8888)
  })
  .catch((err)=>{
    console.error(err)
  })
