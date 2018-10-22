const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const MD5 = require("crypto-js/md5");
const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");
const key = require("../../config/keys");
const passport= require("passport"); 

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
                let secret = MD5(MD5(req.body.password) + "lap");
                const newUser = User({
                    name:req.body.name,
                    email:req.body.email,
                    avatar:avatar,
                    identity:req.body.identity,
                    password: secret.toString()
                });
                newUser.save()
                    .then((user)=>{return res.json({"status":1,"msg":"注册成功"});})
                    .catch((err)=>{return res.json({"status":-1,"msg":"存入数据库出错"});});
            }
        })
        .catch((err)=>{return res.json(err);})
});

router.post("/login",(req,res)=>{
    let md5Password =  MD5(MD5(req.body.password) + "lap");
    User.findOne({email:req.body.email})
        .then((user)=>{
            if(user.password === md5Password.toString()){
                const rule = {
                    id:user._id,
                    name:user.name,
                    avatar:user.avatar,
                    identity:user.identity
                };
                jwt.sign(rule,key.Key,{expiresIn:3600},(err,token)=>{
                        if(!err){
                            return res.json({"status":1,"msg":"登录成功","token":"Bearer " + token});
                        }else{
                            return res.json({"status":-2,"msg":"后台返回token出错"});
                        }
                    }
                )
                
            }else{
                return res.json({"status":0,"msg":"密码错误"});
            }
        })
        .catch((err)=>{return res.json({"status":-1,"msg":"服务器出错请重试!"}) })
});

router.get("/current",passport.authenticate('jwt',{session:false}),(req,res)=>{
    res.json({"status":1,
               "msg":"请求current成功",
               "info":{"_id":req.user._id,
                       "name":req.user.name,
                       "email":req.user.email,
                       "avatar":req.user.avatar,
                       "identity":req.user.identity
                      }
            });
});

 
module.exports = router;