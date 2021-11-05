const Data = require('./stats')

let numbers = [6,5,4,3,2,1]

let stat = new Data(numbers);

//console.log(stat.data);
// console.log(stat.media());
// console.log(stat.variancia());
// console.log(stat.cv());
// console.log(stat.contador());
// console.log(stat.desvio());
// console.log(stat.moda());
//console.log(stat.mediana());
console.log(stat.percentil(1));