const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProfileSchema = new Schema({
    type:{
       type:String
    },
    describe:{
       type:String,
       required:true
    },
    income:{
        type:String,
        // required:true
    },
    expend:{
        type:String,
        // required:true
    },
    now:{
        type:String,
        // required:true
    },
    remark:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now()
    }

});

module.exports = Profile = mongoose.model("profile",ProfileSchema);