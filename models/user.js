const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    type:String,
    label:String,
    photoUrl:String
});

module.exports = userSchema;