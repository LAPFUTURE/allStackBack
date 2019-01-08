const express = require("express");

const router = express.Router();

const Foods = require("../../models/Foods");

const passport= require("passport"); 

router.post("/addshop",(req,res)=>{
    const newFoods = Foods({
        shop:req.body.shop,
        times:1+req.body.times,
        which:req.body.which
    });
    newFoods.save()
        .then((food)=>{
            return res.json({"status":1,"food":food,"msg":"add food success!"});
        })
        .catch((err)=>{
            return res.json({"status":-1,err:err,"msg":"food存入数据库出错"});
    });
});

router.post("/fileupload",(req,res)=>{
    console.log("success");
    return res.json({"status":-1,"message":"返回成功"});
});

module.exports = router;