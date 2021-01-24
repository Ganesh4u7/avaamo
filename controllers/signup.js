const mongoose = require("mongoose");

const userSchema = require("../models/userSchema");
const userData = mongoose.model('users',userSchema);


const signup_user = async(req,res,next) =>{

    try{
        let name = req.body.name;

        userData.findOne({name},(err,data)=>{
            if(err){
                console.log(error);
                res.send({status:false,payload:"Error Occurred"}); 
            }
            else{
                
                if(data){
                    console.log(data);
                   res.send({status:false,payload:"User already Exists"});
                }
                else{
                    let userDetails = new userData(req.body);

                    userDetails.save((err1,data1)=>{
                        if(err1){
                            console.log(error);
                            res.send({status:false,payload:"Error Occurred"});  
                        }
                        else{
                            res.send({status:true,payload:data1}); 
                        }
                    });
                }
            }
        });

    }
    catch(error){
        console.log(error);
        res.send({status:false,payload:"Error Occurred"});
    }
}

module.exports = signup_user;