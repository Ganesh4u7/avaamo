const mongoose = require("mongoose");

const jobSchema = require('../models/jobSchema');
const jobData = mongoose.model('jobs',jobSchema);

const jodScheduleSchema = require('../models/jobsSchedule');
const jobSchedule = mongoose.model('jobSchedules',jodScheduleSchema);

const create_new_job = async (req,res,next) => {

    try{
        let newJobData = req.body;

        let data = new jobData(newJobData);
       

        data.save((err,data1)=>{
            if(err){
                console.log(err);
                res.send({status:false,payload:"Error occurred"});
            }
            else{
                let newDate = new Date(newJobData.created).getTime() + (newJobData.request_interval_seconds * 1000);

                console.log(data1._id);
                console.log(newDate);

                let newJobSchedule = new jobSchedule({
                    name:data1.name,
                    id:data1._id,
                    frequency:data1.request_interval_seconds,
                    nextUpdate: newDate
                });

                newJobSchedule.save((err1,data1)=>{
                    if(err1){
                        console.log(err1);
                        res.send({status:false,payload:"Error occurred"});
                    }
                    else{
                        res.send({status:true,payload:"Job Saved Successfully"});
                    }
                });

                // res.send({status:true,payload:"Job Saved Successfully"});
                
            }
        })

    }
    catch(error){
        console.log(error);
        res.send({status:false,payload:"Error Occurred"});
    }
};

module.exports = create_new_job;