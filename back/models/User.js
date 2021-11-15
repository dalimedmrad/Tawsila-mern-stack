const mongoose = require('mongoose');
const schema = mongoose.Schema


const UserSchema = new schema({
    name:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String,
    },
    phone:{
        type:Number,
        required:true
    },
    date_naiss:{
        type:String
    },
    rating:{
        type:Number
    },
    isAuth:{
        type:Boolean,
        default:false
    }


});


module.exports = mongoose.model("user",UserSchema);