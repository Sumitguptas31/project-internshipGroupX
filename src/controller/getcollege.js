const collegemodel = require('../model/collegemodel')
const internmodel = require('../model/internmodel')

const getThecollege= async function(req,res)
{
    try{
    let collegeName = req.query.collegeName
    if(!collegeName){
        res.status(400).send({status:false,msg:'Bad Request'})
        return
    }
    let collegeData= await collegemodel.findOne({name:collegeName})
    if(!collegeData){
        res.status(400).send({status:false,msg:'collegename is not found'})
        return
    }
     else{
          let collegeDetails={
              name:collegeData.name,
            fullname:collegeData.fullname,
            logoLink:collegeData.logoLink,
            interest:[]
        }
          let collegeId= collegeData.id

        let appliedIntern = await internmodel.find({collegeId:collegeId}).select({name:1,email:1,mobile:1})
         collegeDetails.interest= appliedIntern
         res.status(200).send({status:true,data:collegeDetails})
     }
}
catch(error){
    res.status(500).send({ msg: "Error", Error: error.message });
}
}
module.exports.getThecollege=getThecollege