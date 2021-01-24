const mongoose = require("mongoose");
const schema = mongoose.Schema;

let jobSchema = new schema({
    
    status:String,
    name:{
        type:String,
        unique:true,
        required:true
    },
    notifications:{
        phones:[],
        emails:[]
    },
    timezone:String,
    request:{
        url:String,
        method:String
    },
    request_interval_seconds:Number,
    tolerated_failures:Number,
    created:Date,
    creator:String
});

module.exports = jobSchema;