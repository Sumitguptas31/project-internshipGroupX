const express= require("express");
const router=express.Router();
const collegecontroller=require('../controller/collegeController')
const interncontroller= require('../controller/internController')



router.post('/functionup/colleges',collegecontroller.college)
router.post('/functionup/interns',interncontroller.collegeIntern)






module.exports=router