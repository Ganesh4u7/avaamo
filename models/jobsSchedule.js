const mongoose = require("mongoose");
const schema = mongoose.Schema;

let jobSchedule = new schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    id:{
        type:String,
        required:true
    },
    frequency:Number,
    status:String,
    nextUpdate:Number
});

module.exports = jobSchedule