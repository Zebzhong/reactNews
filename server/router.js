var express = require('express');
var router = express.Router();
var crud = require('./crud.js');
var url = require('url');

/*router.post('/login', (req, res) => {
  var sql = 'select * from react_user where username=? AND password=?';
  var username = req.body.username;
  console.log(username)
  console.log(username);
  var password = req.body.password;
  console.log(password);
  var arr = [username, password];
  crud.crudData(sql, arr, (result) => {
    console.log(result);
    if (result.length>0) {
      res.json(200, {
        msg: 'success',
        username:result[0].username
      })
    } else {
      res.json(404, {msg: 'error'})
    }
  })
})
router.post('/regesiter', (req, res) => {
  var sql = 'select * from react_user where username=?';
  var addSql = 'insert into react_user values (null,?,?)';
  var r_username = req.body.r_username;
  var r_password = req.body.r_password;
  var arr = [r_username];
  var addArr = [r_username, r_password];
  crud.crudData(sql, arr, (result) => {
    if (result.length>0) {
      res.json(200, {msg: '用户名已存在'})
    } else {
      crud.crudData(addSql, addArr, (result) => {
        if (result) {
          res.json(200, {msg: '注册成功'})
        } else {
          res.json(404, {msg: 'error'})
        }
      })
    }
  })
})*/

router.get('/login',(req,res)=>{
  let sql = 'select * from react_user where username=? AND password=?';
  let query = url.parse(req.url,true).query;
  let username = query.username;
  let password = query.password;
  let arr = [username,password];
  crud.crudData(sql, arr, (result) => {
    if (result.length>0) {
      res.json(200, {
        msg: 'success',
        username:result[0].username
      })
    } else {
      res.json(404, {msg: 'error'})
    }
  })
})
router.get('/regesiter',(req,res)=>{
  let sql = 'select * from react_user where username=?';
  let addSql = 'insert into react_user values (null,?,?)';
  let query = url.parse(req.url,true).query;
  let r_username = query.username;
  let r_password =  query.password;
  let arr = [r_username];
  let addArr = [r_username, r_password];
  crud.crudData(sql, arr, (result) => {
    if (result.length>0) {
      res.json(200, {msg: '用户名已存在'})
    } else {
      crud.crudData(addSql, addArr, (result) => {
        if (result) {
          res.json(200, {msg: '注册成功'})
        } else {
          res.json(404, {msg: 'error'})
        }
      })
    }
  })
})

module.exports = router;