const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const internSchema= new mongoose.Schema(
    {
        name: {type:String,require:true,unique:true},
        email: {type:String,require:true,unique:true },
         mobile: {type:Number,required:true,unique:true}, 
             collegeName: {type:ObjectId, ref:'college'},
             isDeleted: {type:Boolean, default: false}


       
    },{timestamps: true}
)

module.exports = mongoose.model('intern',internSchema);