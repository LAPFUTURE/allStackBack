const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const foodsSchema = new Schema({
    shop:{
       type:String
    },
    times:{
       type:String
    },
    which:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now()
    }

});

module.exports = Foods = mongoose.model("food",foodsSchema);