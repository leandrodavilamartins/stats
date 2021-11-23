const Statistics = require('./stats')

//const poisson = new Statistics.Poisson(10)
//const bin = new Statistics.Binomial(15, 0.28,0.72)
const normal = new Statistics.Normal(77,20)
//const hyper = new Statistics.Hyper(3,12,5)
//let numbers = [6,5,4,3,2,1]

//let stat = new Data(numbers);

//console.log(stat.data);
// console.log(stat.media());
// console.log(stat.variancia());
// console.log(stat.cv());
// console.log(stat.contador());
//console.log(stat.desvio);
//console.log(stat.moda);
//console.log(stat.mediana);
//console.log(stat.percentil(1));
//console.log(stat.media);
//console.log(poisson.probability(5));
//console.log(bin.probability(4));
//console.log(hyper.probability(1));
//console.log(bin.cumulative(2));
//console.log(bin.upper(2));
console.log(1 - normal.probability(100))
