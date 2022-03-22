const express= require('express');
const router=express.Router();
const collegeController=require("../controller/collegeController")
const internController= require("../controller/internController")
const getcollegeController = require("../controller/getcollege")



router.post("/functionup/colleges",collegeController.college)
router.post("/functionup/interns",internController.collegeIntern)
router.get("/functionup/collegeDetails",getcollegeController.getThecollege)


module.exports=router;