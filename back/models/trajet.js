const mongoose = require('mongoose');
const schema = mongoose.Schema;


const TrajetSchema = new schema({
    depart:{
        type:String,
        required:true
    },
    arrive:{
        type:String,
        required:true
    },
    date_dep:{
        type:String,
        required:true
    },
    nombredepassage:{
        type:Number,
        required:true
    },
    reserve:{
        type:Number
    },
    prix:{
        type:Number,
        required:true
    },
    description:{
        type:String,
    },
    modelvoiture:{
        type:String,
        required:true
    },
    couleurvoiture:{
        type:String,
        required:true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
});


module.exports = mongoose.model("trajet",TrajetSchema);