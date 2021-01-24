const mongoose = require("mongoose");
const router = require('express').Router();
const jobSchema = require('../models/jobSchema');
const jobData = mongoose.model('jobs',jobSchema);

const jodScheduleSchema = require('../models/jobsSchedule');
const jobSchedule = mongoose.model('jobSchedules',jodScheduleSchema);


const create_job = require('../controllers/create-job');
const get_jobs = require('../controllers/get_jobs');
const delete_job = require('../controllers/delete_job');
const pause_job = require('../controllers/pause_job');
const resume_job = require('../controllers/resume_job');
const signup = require('../controllers/signup');
const login = require('../controllers/login');

router.post('/signup',signup);
router.post('/login',login);
router.post('/create_job',create_job);
router.post('/get_jobs',get_jobs);
router.post('/delete_job',delete_job);
router.post('/pause_job',pause_job);
router.post('/resume_job',resume_job);




setInterval(() => {
    let date = Date.now()
jobSchedule.find({nextUpdate: {$lt: date},status:{$ne:"Paused"}}, (err,data)=>{
    if(err){
        console.log(error);
        res.send({status:false,payload:"Error Occurred"});
    }
    else{
        console.log(data);
        data.forEach((job)=>{
            let date= new Date();
            jobData.findByIdAndUpdate({_id:job.id},{created:date},(err1,data1)=>{
                if(err1){
                    console.log(err1);
                }
                else{
                    let nextDate = Date.now() + (job.frequency * 1000);
                    jobSchedule.findByIdAndUpdate({_id:job._id},{nextUpdate:nextDate},(err2,data2)=>{
                        if(err2){
                            console.log(err2)
                        }
                        else{
                            console.log("Job Done!!");
                        }
                    })
                }
            })
        })
    }
})

},5000);

module.exports = router;