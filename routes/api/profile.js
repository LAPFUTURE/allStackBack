const express = require("express");

const router = express.Router();

const Profile = require("../../models/Profile");

const passport= require("passport"); 

router.get("/profile",(req,res)=>{
    return res.json({"status":1,"msg":"profile is running!"});
    });


    router.post("/add",passport.authenticate("jwt",{session:false}),(req,res)=>{
        const profileFields = {};
        if(req.body.type){profileFields.type = req.body.type;}
        if(req.body.describe){profileFields.describe = req.body.describe;}
        if(req.body.income){profileFields.income = req.body.income;}
        if(req.body.expend){profileFields.expend = req.body.expend;}
        if(req.body.cash){profileFields.cash = req.body.cash;}
        if(req.body.remark){profileFields.remark = req.body.remark}
        
        new Profile(profileFields).save().then(profile=>{
            res.json({"msg":"add success","profileFields":profileFields});
        })
    })
    
module.exports = router;