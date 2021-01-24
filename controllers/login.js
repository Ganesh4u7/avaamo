const mongoose = require("mongoose");

const userSchema = require("../models/userSchema");
const userData = mongoose.model('users',userSchema);


const login_user = async(req,res,next) =>{

    try{
        let name = req.body.name;

        console.log(name);

        userData.findOne({name},(err,data)=>{
            if(err){
                console.log(error);
                res.send({status:false,payload:"Error Occurred"}); 
            }
            else{
                console.log(data);
                if(data){
                    console.log(data);
                   res.send({status:true,payload:data});
                }
                else{
                    res.send({status:false,payload:"Invalid Username"}); 
                }
            }
        });
    }
    catch(error){
        console.log(error);
        res.send({status:false,payload:"Error Occurred"});
    }
}

module.exports = login_user;