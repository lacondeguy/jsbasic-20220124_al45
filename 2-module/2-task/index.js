function isEmpty(obj) {
  for (let key in obj) {
     if (obj != undefined) {
     return false;
     }
  }
return true;
}