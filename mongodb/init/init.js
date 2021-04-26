 let mongoose = require('mongoose');
let {userModel} = require('../models/user.model');

 mongoose.connect('mongodb://localhost:27017/mongoose_test',
   { useUnifiedTopology: true ,useNewUrlParser:true},(err)=>{
     if(err){
       console.log(err);
       throw new Error('mongoose 连接失败fail');
     }else {
       console.log('连接成功');
     }
   });




