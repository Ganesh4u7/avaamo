const mongoose = require("mongoose");
const router = require('express').Router();

const jobSchema = require('../models/jobSchema');
const jobData = mongoose.model('jobs',jobSchema);


const get_jobs = async(req,res,next) =>{
    try{
        let name = req.body.name;
        jobData.find({ $or:[ 
            {'creator':name}, {'creator':'any'} 
          ]},{},{limit:10},(err,data)=>{
            if(err){
                console.log(error);
                res.send({status:false,payload:"Error Occurred"});
            }
            else{
           //  console.log(data);
                res.send({status:true,payload:data});
            }
        });
    }
    catch(error){
        console.log(error);
        res.send({status:false,payload:"Error Occurred"});
    }
};

module.exports = get_jobs;

