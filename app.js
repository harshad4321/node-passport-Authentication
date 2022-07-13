const express = require ('express');
const expressLayouts =require('express-ejs-layouts');
const { contentSecurityPolicy } = require('helmet');
const mongoose = require('mongoose')
const flash = require('connect-flash');
const session = require('express-session');


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

// Express body parser
app.use(express.urlencoded({extended:false}));

// Express session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    }));



// Connect flash
app.use(flash());


//Routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));



const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Listening on port ${PORT}!!!!.`));  