let {Schema,model} = require('mongoose');

const userSchema =new Schema({
  username:String,
  sex:{
    type:String,
    default:'男'
  },
});
/**
 * 【表名,定义字段名】
 * @type {Model<Document>}
 */
const  userModel = model("User",userSchema);
exports.userModel =userModel;