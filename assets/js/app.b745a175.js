(function(e){function t(t){for(var n,i,o=t[0],l=t[1],c=t[2],p=0,d=[];p<o.length;p++)i=o[p],r[i]&&d.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},s=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"00a5":function(e,t,a){},"0165":function(e,t,a){"use strict";var n=a("f325"),r=a.n(n);r.a},"034f":function(e,t,a){"use strict";var n=a("c21b"),r=a.n(n);r.a},"08ff":function(e,t,a){"use strict";var n=a("00a5"),r=a.n(n);r.a},"15a5":function(e,t,a){},"266d":function(e,t,a){},"343f":function(e,t,a){"use strict";var n=a("266d"),r=a.n(n);r.a},"44da":function(e,t,a){},"4b5d":function(e,t,a){"use strict";var n=a("8e77"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var n=a("a026"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}}),a("router-view")],1)},s=[],i=(a("ac6a"),a("456d"),a("6bde")),o=a("04e1"),l=a.n(o),c={name:"app",components:{},created:function(){if(localStorage.eleToken){var e=l()(localStorage.eleToken);this.$store.dispatch("setAuthenticated",!this.isEmpty(e)),this.$store.dispatch("setUser",e)}},methods:{isEmpty:function(e){return void 0===e||null===e||"object"===Object(i["a"])(e)&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length}}},u=c,p=(a("034f"),a("2877")),d=Object(p["a"])(u,r,s,!1,null,null,null);d.options.__file="App.vue";var f=d.exports,m=a("8c4f"),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("HeadNav"),a("left"),a("div",{staticClass:"content"},[a("router-view")],1)],1)},h=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"head-nav"},[n("img",{staticClass:"avatar",attrs:{src:e.user.avatar}}),n("el-row",[n("el-col",{staticClass:"logo-containner",attrs:{span:3}},[n("img",{staticClass:"logo",attrs:{src:a("86d5")}})]),n("el-col",{staticClass:"center",attrs:{span:18}},[n("div",{staticClass:"title"},[e._v("LAP ManageSystem")])]),n("el-col",{staticClass:"right",attrs:{span:3}},[n("div",{staticClass:"welcome"},[n("p",[e._v("Welcome,"+e._s(e.user.name))])]),n("div",{staticClass:"dropdown"},[n("el-dropdown",{attrs:{trigger:"click"},on:{command:e.handleCommand}},[n("span",{staticClass:"el-dropdown-link"},[n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"info"}},[e._v("Personal")]),n("el-dropdown-item",{attrs:{command:"logout"}},[e._v("Logout")])],1)],1)],1)])],1)],1)},b=[],_={name:"head-nav",components:{},methods:{handleCommand:function(e){"info"===e?this.showInfoList():"logout"===e&&this.logout()},showInfoList:function(){this.$router.push("/infoshow")},logout:function(){localStorage.removeItem("eleTOken"),this.$store.dispatch("clearCurrentState"),this.$router.push("/login")}},computed:{user:function(){return this.$store.getters.user}}},w=_,y=(a("e4aa"),Object(p["a"])(w,v,b,!1,null,"10956611",null));y.options.__file="HeadNav.vue";var x=y.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticClass:"tac"},[a("el-col",{attrs:{span:2}},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"2","background-color":"#409EFF","text-color":"#ffffff","active-text-color":"#ffffff"}},[a("el-menu-item",{attrs:{index:"0"}},[a("i",{staticClass:"el-icon-menu"}),a("span",{attrs:{slot:"title"},slot:"title"}),a("router-link",{staticClass:"ahref",attrs:{to:"/home"}},[e._v("Home")])],1),a("el-menu-item",{attrs:{index:"1"}},[a("i",{staticClass:"el-icon-bell"}),a("span",{attrs:{slot:"title"},slot:"title"}),a("router-link",{staticClass:"ahref",attrs:{to:"/foodselector"}},[e._v("Eating")])],1),e._l(e.items,function(t){return[t.children?a("el-submenu",{key:t.path,attrs:{index:t.path,"background-color":"#409EFF","active-text-color":"#ffffff"}},[a("template",{slot:"title"},[a("i",{class:t.icon,staticStyle:{"margin-right":"5px"}}),a("span",{attrs:{solt:"title"}},[e._v(e._s(t.name))])]),e._l(t.children,function(t,n){return a("router-link",{key:n,attrs:{to:t.path}},[a("el-menu-item",{attrs:{index:t.path}},[a("span",{staticStyle:{"margin-left":"60px"},attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.name))])])],1)})],2):e._e()]})],2)],1)],1)},$=[],C={name:"left",data:function(){return{items:[{icon:"el-icon-edit",name:"Fundus",path:"fund",children:[{path:"/fundlist",name:"Control"}]},{icon:"el-icon-info",name:"Infos",path:"info",children:[{path:"/infoshow",name:"Personal"}]}]}}},D=C,T=(a("da31"),Object(p["a"])(D,k,$,!1,null,"6a037e98",null));T.options.__file="Left.vue";var E=T.exports,S={name:"index",components:{HeadNav:x,left:E}},U=S,j=(a("8fc1"),Object(p["a"])(U,g,h,!1,null,null,null));j.options.__file="Index.vue";var O=j.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[e._v("\n    home\n")])},A=[],P={name:"home",components:{}},z=P,I=(a("4b5d"),Object(p["a"])(z,F,A,!1,null,"13616777",null));I.options.__file="Home.vue";var q=I.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"infoshow"},[a("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[a("el-col",{staticClass:"left",attrs:{span:8}},[a("div",{staticClass:"avatar-container"},[a("img",{staticClass:"avatar",attrs:{src:e.user.avatar}})])]),a("el-col",{staticClass:"right",attrs:{span:16}},[a("div",{staticClass:"name"},[a("i",{staticClass:"el-icon-edit"},[e._v(" "+e._s(e.user.name))])]),a("div",{staticClass:"identity"},[a("i",{staticClass:"el-icon-setting"}),e._v(" "+e._s(e.user.identity))])])],1)],1)},N=[],H={name:"infoshow",components:{},computed:{user:function(){return this.$store.getters.user}}},M=H,R=(a("63e3"),Object(p["a"])(M,L,N,!1,null,"79199a00",null));R.options.__file="InfoShow.vue";var J=R.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"register"},[a("div",{staticClass:"form_container"},[a("div",{staticClass:"title"},[e._v("Manage System")]),a("el-form",{ref:"registerUser",staticClass:"demo-ruleForm",attrs:{model:e.registerUser,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"用户名",prop:"name"}},[a("el-input",{attrs:{"aria-placeholder":"请输入用户名"},model:{value:e.registerUser.name,callback:function(t){e.$set(e.registerUser,"name",t)},expression:"registerUser.name"}})],1),a("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[a("el-input",{model:{value:e.registerUser.email,callback:function(t){e.$set(e.registerUser,"email",t)},expression:"registerUser.email"}})],1),a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{type:"password"},model:{value:e.registerUser.password,callback:function(t){e.$set(e.registerUser,"password",t)},expression:"registerUser.password"}})],1),a("el-form-item",{attrs:{label:"确认密码",prop:"password2"}},[a("el-input",{attrs:{type:"password"},model:{value:e.registerUser.password2,callback:function(t){e.$set(e.registerUser,"password2",t)},expression:"registerUser.password2"}})],1),a("el-form-item",{attrs:{label:"选择身份"}},[a("el-select",{attrs:{placeholder:"请选择身份"},model:{value:e.registerUser.identity,callback:function(t){e.$set(e.registerUser,"identity",t)},expression:"registerUser.identity"}},[a("el-option",{attrs:{label:"用户",value:"user"}},[e._v("用户")]),a("el-option",{attrs:{label:"管理员",value:"manage"}},[e._v("管理员")])],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("registerUser")}}},[e._v("注册")]),a("el-button",{attrs:{type:"warning"},on:{click:function(t){e.resetForm("registerUser")}}},[e._v("重置")]),a("el-button",{attrs:{type:"success"}},[a("router-link",{attrs:{to:"/login"}},[e._v("登录")])],1)],1)],1)],1)])},B=[],G={name:"register",components:{},data:function(){var e=this,t=function(t,a,n){a!==e.registerUser.password?n(new Error("两次密码输入不一致")):n()};return{registerUser:{name:"",email:"",password:"",password2:"",identity:""},rules:{name:[{required:!0,message:"用户名不能为空",trigger:"blur"},{min:3,max:20,message:"长度在3-20个字符之间",trigger:"blur"}],email:[{type:"email",required:!0,message:"邮箱格式不正确",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:6,max:30,message:"长度在6-20个字符之间",trigger:"blur"}],password2:[{required:!0,message:"确认密码不能为空",trigger:"blur"},{min:6,max:30,message:"长度在6-20个字符之间",trigger:"blur"},{validator:t,trigger:"blur"}],identity:[]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){e&&t.$axios.post("http:127.0.0.1:5001/api/users/register",t.registerUser).then(function(e){t.$message({message:"账号注册成功",type:"success"}),t.$router.push("/login")})})},resetForm:function(e){this.$refs[e].resetFields()}}},K=G,Q=(a("08ff"),Object(p["a"])(K,W,B,!1,null,"5b580018",null));Q.options.__file="Register.vue";var V=Q.exports,X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"register"},[a("div",{staticClass:"form_container"},[a("div",{staticClass:"title"},[e._v("Manage System")]),a("el-form",{ref:"loginUser",staticClass:"demo-ruleForm",attrs:{model:e.loginUser,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[a("el-input",{model:{value:e.loginUser.email,callback:function(t){e.$set(e.loginUser,"email",t)},expression:"loginUser.email"}})],1),a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{type:"password"},model:{value:e.loginUser.password,callback:function(t){e.$set(e.loginUser,"password",t)},expression:"loginUser.password"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("loginUser")}}},[e._v("登录")]),a("el-button",{attrs:{type:"warning"},on:{click:function(t){e.resetForm("loginUser")}}},[e._v("重置")])],1),a("div",{staticClass:"bottom"},[a("p",[e._v("还没有账号?现在"),a("router-link",{attrs:{to:"/register"}},[e._v("注册=>")])],1)])],1)],1)])},Y=[],Z={name:"register",components:{},data:function(){return{loginUser:{email:"",password:""},rules:{email:[{type:"email",required:!0,message:"邮箱格式不正确",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:6,max:30,message:"长度在6-20个字符之间",trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){e&&t.$axios.post("http:127.0.0.1:5001/api/users/login",t.loginUser).then(function(e){if(1===e.data.status){var a=e.data.token;localStorage.setItem("eleToken",a);var n=l()(a);t.$store.dispatch("setAuthenticated",!t.isEmpty(n)),t.$store.dispatch("setUser",n),t.$message({message:"登录成功",type:"success"}),t.$router.push("/index")}else t.$message.error("请检查账号或密码")})})},resetForm:function(e){this.$refs[e].resetFields()},isEmpty:function(e){return void 0===e||null===e||"object"===Object(i["a"])(e)&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length}}},ee=Z,te=(a("0165"),Object(p["a"])(ee,X,Y,!1,null,"e23c4a36",null));te.options.__file="Login.vue";var ae=te.exports,ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"register"})},re=[],se={name:"notfound",components:{}},ie=se,oe=(a("f267"),Object(p["a"])(ie,ne,re,!1,null,"17bb7f66",null));oe.options.__file="NotFound.vue";var le=oe.exports,ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"foodselector"},[a("p",[e._v(e._s(e.nowTime))]),a("button",{on:{click:function(t){e.addfood()}}},[e._v("addfood")])])},ue=[],pe={name:"foodselector",components:{},data:function(){return{nowTime:new Date}},created:function(){setInterval(function(){this.nowTime=new Date},1e3)},methods:{addfood:function(){this.$axios.post("http:127.0.0.1:5001/api/food/addshop",{shop:"小米家",times:5,which:"dinner"}).then(function(e){console.log(e.data)}).catch(function(e){console.log("err:",e)})}},computed:{}},de=pe,fe=(a("d9d5"),Object(p["a"])(de,ce,ue,!1,null,null,null));fe.options.__file="FoodSelector.vue";var me=fe.exports,ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fundlist"},[a("div",[a("el-form",{ref:"add_data",attrs:{inline:!0}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择开始时间"},model:{value:e.begin,callback:function(t){e.begin=t},expression:"begin"}}),e._v("  \n            "),a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择结束时间"},model:{value:e.end,callback:function(t){e.end=t},expression:"end"}}),e._v("  \n            "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.filters()}}},[e._v("筛选")])],1),"admin"==e.user.identity?a("el-form-item",{staticClass:"add"},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.handleAdd()}}},[e._v("添加")])],1):e._e()],1)],1),e.tableData.length>0?a("el-table",{staticClass:"opacity",staticStyle:{width:"100%"},attrs:{data:e.tableData,height:"520"}},[a("el-table-column",{attrs:{fixed:"",type:"index",label:"Num",width:"75",align:"center"}}),a("el-table-column",{attrs:{prop:"date",label:"Date",width:"225",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-time"}),a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.date))])]}}])}),a("el-table-column",{attrs:{prop:"type",label:"Type",width:"125",align:"center"}}),a("el-table-column",{attrs:{prop:"describe",label:"Describe",width:"200",align:"center"}}),a("el-table-column",{attrs:{prop:"income",label:"Income(+)",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{color:"#009933"}},[e._v(e._s(t.row.income))])]}}])}),a("el-table-column",{attrs:{prop:"expend",label:"Expend(-)",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{color:"#ff4400"}},[e._v(e._s(t.row.expend))])]}}])}),a("el-table-column",{attrs:{prop:"cash",label:"Now",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{color:"rgb(64, 158, 255)"}},[e._v(e._s(t.row.cash))])]}}])}),a("el-table-column",{attrs:{prop:"remark",label:"Remark",width:"150",align:"center"}}),"admin"==e.user.identity?a("el-table-column",{attrs:{prop:"operation",label:"Operation",fixed:"right",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])}):e._e()],1):e._e(),a("el-row",{attrs:{span:24}},[a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":e.paginations.page_index,"page-sizes":e.paginations.page_sizes,"page-size":e.paginations.page_size,layout:e.paginations.layout,total:e.paginations.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.paginations,"page_index",t)}}})],1)]),a("dialogs",{attrs:{lap:e.dialogs,formData:e.formData},on:{update:e.getProfile}})],1)},he=[],ve=a("a322"),be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dialogs"},[a("el-dialog",{attrs:{width:"72%",top:"18vh",title:e.lap.title,visible:e.lap.show,"show-close":!0},on:{"update:visible":function(t){e.$set(e.lap,"show",t)}}},[a("el-form",{ref:"form",attrs:{model:e.formData,rules:e.form_rules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"Type"}},[a("el-select",{model:{value:e.formData.type,callback:function(t){e.$set(e.formData,"type",t)},expression:"formData.type"}},e._l(e.form_type_list,function(e,t){return a("el-option",{key:t,attrs:{value:e}})}))],1),a("el-form-item",{attrs:{prop:"describe",label:"Describe"}},[a("el-input",{attrs:{type:"describe"},model:{value:e.formData.describe,callback:function(t){e.$set(e.formData,"describe",t)},expression:"formData.describe"}})],1),a("el-form-item",{attrs:{prop:"income",label:"Income"}},[a("el-input",{attrs:{type:"income"},model:{value:e.formData.income,callback:function(t){e.$set(e.formData,"income",t)},expression:"formData.income"}})],1),a("el-form-item",{attrs:{prop:"expend",label:"Expend"}},[a("el-input",{attrs:{type:"expend"},model:{value:e.formData.expend,callback:function(t){e.$set(e.formData,"expend",t)},expression:"formData.expend"}})],1),a("el-form-item",{attrs:{prop:"now",label:"Now"}},[a("el-input",{attrs:{type:"now"},model:{value:e.formData.now,callback:function(t){e.$set(e.formData,"now",t)},expression:"formData.now"}})],1),a("el-form-item",{attrs:{prop:"remark",label:"Remark"}},[a("el-input",{attrs:{type:"remark"},model:{value:e.formData.remark,callback:function(t){e.$set(e.formData,"remark",t)},expression:"formData.remark"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("form")}}},[e._v("确 定")]),a("el-button",{on:{click:function(t){e.lap.show=!1}}},[e._v("取 消")])],1)],1)],1)},_e=[],we={name:"dialogs",props:{lap:Object,formData:Object},data:function(){return{form_type_list:["Expend","Income"],form_rules:{describe:[{required:!0,message:"描述不能为空",trigger:"blur"}],income:[{required:!1}],expend:[{required:!1}],now:[{required:!0,message:"余额不能为空",trigger:"blur"}],remark:[{required:!1}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(e){var a="add"===t.lap.option?"add":"edit/".concat(t.formData.id);t.$axios.post("http:127.0.0.1:5001/api/profile/"+a,t.formData).then(function(e){e&&(1===e.data.msg?t.$message({message:"添加成功",type:"success"}):1===e.data.status?t.$message({message:"修改成功",type:"success"}):t.$message({message:"请重试",type:"warning"}),t.lap.show=!1,t.$emit("update"))})}})}}},ye=we,xe=(a("343f"),Object(p["a"])(ye,be,_e,!1,null,"0fed7611",null));xe.options.__file="Dialogs.vue";var ke=xe.exports,$e=Object(ve["a"])({name:"fundlist",components:{dialogs:ke},created:function(){this.getProfile()},computed:function(){this.$store.getters.user},data:function(){return{formData:{type:"",describe:"",income:"",expend:"",now:"",remark:"",id:""},begin:"",end:"",filterTableData:[],paginations:{page_index:1,total:0,page_size:5,page_sizes:[5,10,15,20],layout:"total,sizes,prev,pager,next,jumper"},tableData:[],allTableData:[],dialogs:{show:!1,title:"",option:"edit"}}},methods:{filters:function(){if(!this.begin||!this.end)return this.$message({type:"warning",message:"请检查时间输入框"}),void this.getProfile();var e=this.begin.getTime(),t=this.end.getTime();this.allTableData=this.filterTableData.filter(function(a){var n=new Date(a.date),r=n.getTime();return r>=e&&r<=t}),this.setPagination()},getProfile:function(){var e=this;this.$axios.get("http:127.0.0.1:5001/api/profile/allProfile").then(function(t){e.allTableData=t.data.profile,e.filterTableData=t.data.profile,e.setPagination()}).catch(function(e){alert("页面发生错误，请刷新页面!")})},handleAdd:function(){this.dialogs={show:!0,title:"Add",option:"add"},this.formData={}},handleEdit:function(e,t){this.dialogs={show:!0,title:"Edit",option:"edit"},this.formData={type:t.type,describe:t.describe,income:t.income,expend:t.expend,now:t.now,remark:t.remark,id:t._id}},handleDelete:function(e,t){var a=this;this.$axios.delete("http:127.0.0.1:5001/api/profile/delete/".concat(t._id)).then(function(e){a.$message({message:"删除成功",type:"success"}),a.getProfile()}).catch(function(e){a.$message({message:"请重试",type:"warning"})})},handleCurrentChange:function(e){for(var t=this.paginations.page_size*(e-1),a=this.paginations.page_size*e,n=[],r=t;r<a;r++)this.allTableData[r]&&n.push(this.allTableData[r]),this.tableData=n},handleSizeChange:function(e){this.paginations.page_index=1,this.paginations.page_size=e,this.tableData=this.allTableData.filter(function(t,a){return a<e})},setPagination:function(e){var t=this;this.paginations.total=this.allTableData.length,this.paginations.page_index=1,this.paginations.page_size=5,this.tableData=this.allTableData.filter(function(e,a){return a<t.paginations.page_size})}}},"computed",{user:function(){return this.$store.getters.user}}),Ce=$e,De=(a("9a6c"),Object(p["a"])(Ce,ge,he,!1,null,"d095c9b6",null));De.options.__file="FundList.vue";var Te=De.exports;n["default"].use(m["a"]);var Ee=new m["a"]({mode:"history",base:"/",routes:[{path:"/",redirect:"/login"},{path:"/index",name:"index",component:O,children:[{path:"/",component:q},{path:"/home",name:"home",component:q},{path:"/infoshow",name:"infoshow",component:J},{path:"/fundlist",name:"FundList",component:Te},{path:"/foodselector",name:"FoodSelector",component:me}]},{path:"/register",name:"register",component:V},{path:"*",name:"404",component:le},{path:"/Login",name:"Login",component:ae}]});Ee.beforeEach(function(e,t,a){var n=!!localStorage.eleToken;"/login"==e.path||"/register"==e.path?a():n?a():a("/login")});var Se,Ue=Ee,je=a("2f62");n["default"].use(je["a"]);var Oe,Fe={SET_AUTHENTICATED:"SET_AUTHENICATED",SET_USER:"SET_USER"},Ae={isAuthenticated:!1,user:{}},Pe={isAuthenticated:function(e){return e.isAuthenticated},user:function(e){return e.user}},ze=(Se={},Object(ve["a"])(Se,Fe.SET_AUTHENTICATED,function(e,t){e.isAuthenticated=t||!1}),Object(ve["a"])(Se,Fe.SET_USER,function(e,t){e.user=t||{}}),Se),Ie={setAuthenticated:function(e,t){var a=e.commit;a(Fe.SET_AUTHENTICATED,t)},setUser:function(e,t){var a=e.commit;a(Fe.SET_USER,t)},clearCurrentState:function(e){var t=e.commit;t(Fe.SET_AUTHENTICATED,!1),t(Fe.SET_USER,null)}},qe=new je["a"].Store({state:Ae,getters:Pe,mutations:ze,actions:Ie}),Le=a("5c96"),Ne=a.n(Le),He=(a("0fae"),a("bc3a")),Me=a.n(He);function Re(){Oe=Le["Loading"].service({lock:!0,text:"Loading...",background:"rgb(0,0,0,0.7)"})}function Je(){Oe.close()}Me.a.interceptors.request.use(function(e){return Re(),localStorage.eleToken&&(e.headers.Authorization=localStorage.eleToken),e},function(e){return Promise.reject(e)}),Me.a.interceptors.response.use(function(e){return Je(),e},function(e){Je(),Le["Message"].error(e.response.data);var t=e.response.status;return 401==t&&(Le["Message"].error("时间已过期，请重新登录!"),localStorage.removeItem("eleToken"),Ue.push("/login")),Promise.reject(e)});var We=Me.a;n["default"].config.productionTip=!1,n["default"].use(Ne.a),n["default"].prototype.$axios=We,new n["default"]({router:Ue,store:qe,render:function(e){return e(f)}}).$mount("#app")},"63e3":function(e,t,a){"use strict";var n=a("15a5"),r=a.n(n);r.a},7198:function(e,t,a){},"86d5":function(e,t,a){e.exports=a.p+"assets/img/bg.65ab680b.jpg"},"89fb":function(e,t,a){},"8e77":function(e,t,a){},"8fc1":function(e,t,a){"use strict";var n=a("44da"),r=a.n(n);r.a},"99cd":function(e,t,a){},"9a6c":function(e,t,a){"use strict";var n=a("c50f"),r=a.n(n);r.a},adaa:function(e,t,a){},c21b:function(e,t,a){},c50f:function(e,t,a){},d9d5:function(e,t,a){"use strict";var n=a("99cd"),r=a.n(n);r.a},da31:function(e,t,a){"use strict";var n=a("adaa"),r=a.n(n);r.a},e4aa:function(e,t,a){"use strict";var n=a("89fb"),r=a.n(n);r.a},f267:function(e,t,a){"use strict";var n=a("7198"),r=a.n(n);r.a},f325:function(e,t,a){}});
//# sourceMappingURL=app.b745a175.js.map