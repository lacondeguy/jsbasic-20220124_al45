function getMinMax(str) {
    let arr = str.split(" ");
    let numbers = [];
    let result = {};

    for (let item of arr) {
      if (isFinite(item)) {
      numbers.push(item);
      } 
    }

result.min = Math.min(...numbers);
result.max = Math.max(...numbers);
return result;
}