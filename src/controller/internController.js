const internmodel =require('../model/internmodel')

    
    
const isValid= function(value){
    if(typeof value==='undefined'||value===null) return false
    if(typeof value==='string'&& value.trim().length===0) return false
    return true;
}
const isValidObjectId = function (objectId) {
    return mongoose.Types.ObjectId.isValid(objectId)
}
const collegeIntern=async function(req,res){
        try{
            let data=req.body
            let { name,mobile,collegeId,email } = data
            if(Object.keys(data).length == 0){
                res.status(400).send({status:false, msg:"Bad Request!"});
            }
            if(!isValid(name)){
              res.status(400).send({status:false, msg:"require name"});
            }
            if(!isValid(mobile)){
                res.status(400).send({status:false, msg:"require mobile"});
            }
            if (!(/^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/.test(mobile))) {
                res.status(400).send({ status: false, msg: "mobile is not a valid mobile" })
            }

            if (!isValid(email)) {
                res.status(400).send({ status: false, msg: "email is required" })
                return
            }
            if (!(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email))) {
                res.status(400).send({ status: false, msg: "email is not a valid email" })
                return
            }

            let isNameAlreadyUsed= await internmodel.findOne({name})
            if(isNameAlreadyUsed){
                res.status(400).send({status:false, msg:"use another name"});
            }
            let isMobileAlreadyUsed= await internmodel.findOne({mobile})
            if(isMobileAlreadyUsed){
                res.status(400).send({status:false,msg:"use another mobile"})
            }
            if (!isValid(collegeId)) {
                res.status(400).send({ status: false, msg: "collegeId is required" })
                return
            }
            let isemailAlreadyUsed = await internmodel.findOne({ email })
            if (isemailAlreadyUsed) {
                res.status(400).send({ status: false, msg: "this email is already used, please provide another email" })
                return
            }
            else{
                let interndata= await internmodel.create(data)
                return res.status(201).send({ status: true, data:interndata });
            }
        }
        catch(error){
            res.status(500).send({ msg: "Error", Error: error.message });
        }
    }


module.exports.collegeIntern=collegeIntern