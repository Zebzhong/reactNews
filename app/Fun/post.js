function toStr(obj){
  var result = '';
  for(var key in obj){
    result += '&' + key + '=' + encodeURIComponent(obj[key]);
  }
  if(result){
    result = result.slice(1);
  }
  return result;
}
export function post(url,paramObj){
  var result = fetch(url,{
    method:'post',
    header:{
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body:toStr(paramObj)
  });
  return result;
}