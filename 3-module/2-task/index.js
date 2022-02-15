function filterRange(arr, a, b) {
  let result = arr.filter(function (number) {
    if (number >= a && number <= b) {
    return number;
    }});
return result;
};