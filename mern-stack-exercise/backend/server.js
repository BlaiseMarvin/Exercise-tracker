const express = require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');




require('dotenv').config();

const app =express();
const port = process.env.PORT||5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://mern-stack-exercise:' +'mern-stack-exercise' +'@mern-stack.7tdbj.mongodb.net/<dbname>?retryWrites=true&w=majority',{userMongoClient:true,useNewUrlParser:true,useCreateIndex:true});


const connection=mongoose.connection;
connection.once('open',()=>{
    console.log('MongoDB database connection established successfully');
})

const exerciseRoutes = require('./routes/exercises');
const userRoutes=require('./routes/users');

app.use('/exercises',exerciseRoutes);
app.use('/users',userRoutes);

app.listen(port,()=>{
    console.log('Server is running on port ' +port);

});