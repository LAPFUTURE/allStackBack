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
        res.json({"msg":1,"profileFields":profileFields});
    })
})

router.get("/allProfile",passport.authenticate("jwt",{session:false}),(req,res)=>{
    Profile.find()
    .then((profile)=>{
        if(profile){
            res.json({"status":1,"profile":profile});
        }else{
            res.json({"status":0,"msg":"数据库没有记录"})
        }
    })
    .catch((err)=>{
        res.json({"status":-1,"err":err});
    })
})

router.get("/:id",passport.authenticate("jwt",{session:false}),(req,res)=>{
    Profile.findOne({"_id":req.params.id})
    .then((one)=>{
        if(one){
            res.json({"status":1,"res":one});
        }else{
            res.json({"status":0,"msg":"没有此id"})
        }
    })
    .catch((err)=>{
        res.json({"status":-1,"msg":"查询出错或无此id"});
    })
})

router.post("/edit/:id",passport.authenticate("jwt",{session:false}),(req,res)=>{
    const profileFields = {};
    if(req.body.type){profileFields.type = req.body.type;}
    if(req.body.describe){profileFields.describe = req.body.describe;}
    if(req.body.income){profileFields.income = req.body.income;}
    if(req.body.expend){profileFields.expend = req.body.expend;}
    if(req.body.cash){profileFields.cash = req.body.cash;}
    if(req.body.remark){profileFields.remark = req.body.remark}

    Profile.findOneAndUpdate(
        {_id:req.params.id},
        {$set:profileFields},
        {new:true}
    )
    .then((profile)=>{
        res.json({"status":1,"profile":profile});
    })
    .catch((err)=>{
       res.json({"err":err});
    })
})
    
router.delete("/delete/:id",passport.authenticate("jwt",{session:false}),(req,res)=>{
    Profile.findOneAndDelete({"_id":req.params.id})
    .then((profile)=>{
        profile.save()
        .then((profile)=>{
            res.json({"status":1,"msg":"删除成功"});
        })
    })
    .catch((err)=>{
        res.json({"status":-1,"err":err,"msg":"删除失败"});
    })
})

module.exports = router;