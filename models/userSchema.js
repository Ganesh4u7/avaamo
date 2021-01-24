const mongoose = require("mongoose");
const schema = mongoose.Schema;

let userSchema = new schema({

    name:{
        type:String,
        unique:true,
        required:true
    },
    photoUrl: String,
    label:String,
    type: String

});

module.exports = userSchema