const express = require("express");

const router = express.Router();

const Profile = require("../../models/Profile");

const passport= require("passport"); 

router.get("/profile",(req,res)=>{
    return res.json({"status":1,"msg":"profile is running!"});
    });


module.exports = router;