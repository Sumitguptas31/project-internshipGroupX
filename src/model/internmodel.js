const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const internSchema= new mongoose.Schema(
    {
        name: {type:String,require:true,unique:true},
        email: {type:String,require:true,unique:true },
         mobile: {type:Number,required:true,unique:true}, 
             collegeId: {type:ObjectId,isDeleted: {type:Boolean, default: false}, ref:'college'}


       
    },{timestamps: true}
)

module.exports = mongoose.model('intern',internSchema);