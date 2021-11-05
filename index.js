const Data = require('./stats')

let numbers = [1,2,4,5,6,5]

let stat = new Data(numbers);

console.log(stat.data);
console.log(stat.media());
console.log(stat.variancia());
console.log(stat.cv());
console.log(stat.contador());
console.log(stat.desvio());
console.log(stat.moda());