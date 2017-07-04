var connection = require('./connection.js');

function crudData(sql,arr,callback){
  connection.Client.query(sql,arr,(error,result)=>{
    if(error){
      console.log('error');
      return;
    }
    console.log('success');
    callback(result);
  })
}

var Crud = {
  crudData
}

module.exports = Crud;