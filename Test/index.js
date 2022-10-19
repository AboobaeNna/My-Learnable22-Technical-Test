const arr =  [5,4,5,4,5,4,4,5,3,3,3,2,2,1,5];
const result = arr.filter(n => arr.indexOf (n) === arr.lastIndexOf(n));
console.log(result);