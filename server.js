const express = require("express");
const mongoose = require("mongoose");//支持大量Mongo操作
const port = process.env.PORT || 5000;
const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");


//连接数据库
const db = require("./config/keys").mongoURL;
mongoose.connect(db)
    .then( () => {}) 
    .catch( (err) => {console.log("连接数据库出错");});

//路由
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const food = require("./routes/api/food");

app.get("/",(req,res)=>{
     res.send("Node is running,hello!");
     
})

//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//使用路由中间件
app.use("/api/users",users);
app.use("/api/profile",profile);
app.use("/api/food",food);

//passport初始化
app.use(passport.initialize());
require("./config/passport")(passport);


app.listen(port,()=>{
    console.log(`Server is running in ${port}`);
})