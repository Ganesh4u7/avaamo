const mongoose = require("mongoose");

const jobSchema = require('../models/jobSchema');
const jobData = mongoose.model('jobs',jobSchema);

const jodScheduleSchema = require('../models/jobsSchedule');
const jobSchedule = mongoose.model('jobSchedules',jodScheduleSchema);

const pause_job = async(req,res,next) => {
    try{
        const id = req.body.id;

        jobData.findByIdAndUpdate({_id:id},{status:"Paused"},(err,data)=>{
            if(err){
                console.log(err);
                res.send({status:false,payload:"Error occurred"});
            }
            else{
                jobSchedule.findOneAndUpdate({id:id},{status:"Paused"},(err1,data1)=>{
                    if(err){
                        console.log(err);
                        res.send({status:false,payload:"Error occurred"});
                    }
                    else{
                        res.send({status:true,payload:"Job Paused"});
                    }

                })   
            }
        })
    }
    catch(error){
        console.log(error);
        res.send({status:false,payload:"Error Occurred"});
    }
};

module.exports = pause_job;