const express = require ('express');
const expressLayouts =require('express-ejs-layouts');
const { contentSecurityPolicy } = require('helmet');
const mongoose = require('mongoose')

const app = express();

//DB connection Config
const db= require('./config/server').mongoURI;

//connection to mongodb

mongoose.connect(db,{useNewUrlParser:true})
.then(()=>console.log('connected to db...'))
.catch(err=>console.log(err))

//EJS
app.use(expressLayouts);
app.set('view engine','ejs')

//Bodyparser
app.use(express.urlencoded({extended:false}))

//Routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));


const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Listening on port ${PORT}!!!!.`));  