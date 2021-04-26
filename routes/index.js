const router = require('koa-router')();

let {mysqlFind,mysqlInsert,mysqlUpdate,mysqlDelete,mysqlFuzzy} = require('../mysql/models/API');
router.get('/', async (ctx, next) => {
  /**
   * 如果你是用mysql你需要这样调用
   */
  // let a = ` SELECT * FROM user WHERE username LIKE '%李%'`;
/*
 await mysqlFuzzy(a).then(async res=>{
   console.log(res);
    let data = {
      title: 'Hello wjt Koa2',
      img:'/images/logo.png',
      result:res
    }
   // await  ctx.render('index', data)
  })*/

  let arr =  [
      {
        "id": 1,
        "username": "jack",
        "password": "123456"
      },
      {
        "id": 2,
        "username": "jasmine",
        "password": "123123"
      },
      {
        "id": 3,
        "username": "china",
        "password": "123123"
      }
    ];
  const data = {
    title: 'WJT-wjtKoa2-template',
    img: '/images/logo.png',
    result:arr,
  }

 await ctx.render('index', data);


})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
