const mongoose = require('mongoose')
 const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
   email:{
        type:String,
        required:true,
        
    },
    password:{
        type:String,
        required:true,
        
    },
    Date:{
        type:Date,
        default:Date.now,
        
    }
 })
 const User =mongoose.model('User',UserSchema);

 model.export()