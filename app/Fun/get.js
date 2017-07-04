export function getData(url){
  let result = fetch(url,{
    method:'get'
  })
  return result;
}