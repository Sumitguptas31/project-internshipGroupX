const collegemodel = require('../model/collegemodel')

const isValid= function(value){
    if(typeof value==='undefined'||value===null) return false
    if(typeof value==='string'&& value.trim().length===0) return false
    return true;
}

const college = async function(req,res){
  
    try{
        let data=req.body
        let { name, fullName, logoLink } = data
        if(Object.keys(data).length ==0){
            res.status(400).send({status:false, msg:"Bad Request!"});
        }
        if(!isValid(name)){
            res.status(400).send({status:false, msg:"require name"});
        }
        if(!isValid(fullName)){
            res.status(400).send({status:false, msg:"require fullname"});
        }
        if(!isValid(logoLink)){
            res.status(400).send({status:false, msg:"require logolink"})
            return
        }
        let isNameAlreadyUsed= await collegemodel.findOne({name})
        if(isNameAlreadyUsed ){
            res.status(400).send({status:false, msg:"use another name"});
            return
        }
        let isFullnameAlreadyUsed = await collegemodel.findOne({fullName})
        if(isFullnameAlreadyUsed){
            res.status(400).send({status:false,msg:"use another fullname"})
            return
        }
        let logoLinkIsAlreadyUsed= await collegemodel.findOne({logoLink})
        if(logoLinkIsAlreadyUsed){
            res.status(400).send({status:false,msg:"use another logolink"})
        }
        else{
             let collegedata= await collegemodel.create(data)
             return res.status(201).send({ status: true, data: collegedata });
        }
   
    }
    catch(error){
        res.status(500).send({ msg: "Error", Error: error.message });
    }

}
//get the college

module.exports.college=college


