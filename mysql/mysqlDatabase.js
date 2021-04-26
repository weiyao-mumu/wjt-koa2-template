let connection = require('./init/init');

/**
 * 定义一个mysql的开关,如果这个flag是true证明弃用这个mysql模块
 * @param flag
 */
const mysqlContext = function (flag) {

  if(flag){
      connection.connect();
      console.log('mysql connect success!!');
  }else{
      // connection.close();
  }
}

module.exports =mysqlContext;