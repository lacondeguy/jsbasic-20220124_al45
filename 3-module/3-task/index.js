function camelize(str) {

let result = str.split('-');

for (let i = 0; i < result.length; i++){
   
     if (i > 0) {
     result[i] = (result[i].slice(0, result[i].length - result[i].length + 1)).toUpperCase() + result[i].slice(1, result[i].length);
     };    
};

result = result.join('');
return result;
}
