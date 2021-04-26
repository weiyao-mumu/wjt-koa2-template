
let connection = require('../init/init');
const chalk = require('chalk');
const logger = content => console.log(chalk.red(content));

/**
 * 查询方法的封装
 * @description SELECT * FROM user
 * @param sql
 * @returns {Promise<void>}
 */
 async function mysqlFind(sql) {
  return new Promise((resolve, reject) => {
    connection.query(sql,function (err,result) {
      if(err!==null){
        logger('查询出错',err);
        reject();
      }else {
        resolve(result);
      }
    });
  });
}

/**
 *
 * 插入方法的封装
 * @description l
 * let sql = 'INSERT INTO user(username,password) VALUES(?,?)';
  let value =   ['jack','1242432'];
 * @param sql
 * @param value
 * @returns {Promise<void>}
 */
async  function mysqlInsert(sql,value){
  return new Promise((resolve, reject) => {
    connection.query(sql,value,function (err, result) {
      if(err){
        throw new Error('mysql insert error 29 Row');
        reject(err);
      }
      resolve(result);
    });
  })

}

/**
 *  更新方法的封装
 * @description   const sql = 'UPDATE user SET username = ?,password = ? WHERE Id = ?';
 var value = ['菜鸟移动站', 'https://m.runoob.com',3];
 * @param sql
 * @param value
 * @returns {Promise<unknown>}
 */
async function mysqlUpdate(sql,value){
  return new Promise((resolve, reject) => {
    connection.query(sql,value,function (err, result) {
      if(err){
        throw new Error('mysql Update error');
        reject(err);
      }
     resolve(result);
    });
  })
}

/**
 *
 * 删除方法的封装
 * @description const sql = 'DELETE FROM user where id=3';
 * @param sql
 * @returns {Promise<void>}
 */
async  function mysqlDelete(sql){
  return new Promise((resolve, reject) => {
    connection.query(sql,function (err, result) {
      if(err){
        throw new Error('mysql Delete error');
        reject(err);
      }
      resolve(result);
    });
  })
};

/**
 * 封装了模糊查询方法
 * @description        SELECT * FROM user WHERE username LIKE '%李%'
 * @param sql
 * @returns {Promise<unknown>}
 */
async  function mysqlFuzzy(sql){
  return new Promise((resolve, reject) => {
    connection.query(sql,function (err, result) {
      if(err){
        throw new Error('mysql Delete error');
        reject(err);
      }
      resolve(result);
    });
  })
};


module.exports = {
    mysqlFind,
    mysqlInsert,
    mysqlUpdate,
    mysqlDelete,
    mysqlFuzzy
}