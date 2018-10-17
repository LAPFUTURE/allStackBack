const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const MD5 = require("crypto-js/md5");
const gravatar = require("gravatar");

router.get("/test",(req,res)=>{
    res.json({path:"/test"});
});

router.get("/",(req,res)=>{
    res.json({path:"/"});
});

router.post("/register",(req,res)=>{
    User.findOne({email:req.body.email})
        .then((user)=>{
            if(user){
                return res.status(400).json({msg:"邮箱已被注册"});
            }else{
                let avatar = gravatar.url('req.body.email', {s: '200', r: 'pg', d: 'mm'});
        // console.log("22:",typeof req.body.password,req.body.password);
                let screct = MD5(MD5(req.body.password) + "lap");
        // console.log(24,screct);
                const newUser = User({
                    name:req.body.name,
                    email:req.body.email,
                    avatar:avatar,
                    password: screct
                });
                newUser.save()
                    .then((user)=>{return res.json({"status":1,"msg":"注册成功"});})
                    .catch((err)=>{return res.json({"status":-1,"msg":"存入数据库出错"});});
            }
        })
        .catch((err)=>{return res.json(err);})
});

router.post("/login",(req,res)=>{
    // console.log("39:",typeof req.body.password,req.body.password);
    let md5Password =  MD5(MD5(req.body.password) + "lap");
    // console.log(42,md5Password.toString());
    User.findOne({email:req.body.email})
        .then((user)=>{
            // console.log("41:",user.password);
            // console.log("42:",md5Password);
            if(user.password === md5Password.toString()){
                return res.json({"status":1,"msg":"登录成功"});
            }else{
                return res.json({"status":0,"msg":"密码错误"});
            }
        })
        .catch((err)=>{return res.json({"status":-1,"msg":"服务器出错请重试!"}) })

});

module.exports = router;