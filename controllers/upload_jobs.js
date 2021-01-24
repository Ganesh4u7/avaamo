const mongoose = require("mongoose");
const router = require('express').Router();

const jobSchema = require('../models/jobSchema');
const jobData = mongoose.model('jobs',jobSchema);


const upload_jobs = async (req,res,next) => {

    try{
        console.log(req.body);
        let url = req.body.url;
       // res.send({status:true});

        router.get(`${url}`, async(request,response,next)=>{

            console.log(response);
            res.send({status:true,Payload:"Data stored"});
            
        });

    }
    catch(error){
        console.log(error);
        res.send({status:false,paylaod:"Error Occurred"});
    }
};

module.exports = upload_jobs;