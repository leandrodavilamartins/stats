class Data {
    constructor(...arrayToPass){
        this.data = arrayToPass[0].sort(function(a,b){return a - b}); // sort the data 
    }
    
    get contador(){
        return this.data.length;
    }

    get soma(){
        let soma = 0;
        this.data.forEach( item => {
            soma += item;
        })
        return soma;
    }

    get media(){
        let soma = this.soma;
        return soma / this.data.length;
    }

    get moda(){
        const map = {};
        this.data.forEach(item => {
            if(map[item]){
                map[item]++;
            }
            else{
                map[item] = 1;
            }
        })
        return map;
    }

    get mediana(){
        let median = '';
        if((this.data.length % 2) == 1 ){
            let middle = Math.floor((parseInt(this.data.length) / 2));
            median = this.data[middle]; 
            //console.log(median);
        }
        else{
            let middle_1 = (parseInt(this.data.length) / 2) - 1 ; 
            //console.log(middle_1 + 1);
            let middle_2 = parseInt(this.data.length) / 2 ;
            //console.log(middle_2 + 1);
            median = (this.data[middle_1] + this.data[middle_2]) / 2 ; 
            //console.log(median);
        }
        return median;
    }

    get variancia(){
        let pre_sum = [];
        this.data.forEach( item => {
            let result = item - this.media;
            pre_sum.push(result * result);
        })
        //console.log(pre_sum);
        let sum = 0 ; 
        pre_sum.forEach( item => {
            sum += item;
        })
        //console.log(sum)
        return sum / (this.data.length - 1);
    }

    get desvio(){
        let result = Math.sqrt(this.variancia)
        return result; 
    }

    get cv(){
        let result = this.desvio / this.media;
        return result;
    }

    percentil(p){
        let values = []; 
        this.data.forEach( item => {
            if( item <= p ){
                values.push(item); 
            }
        })
        let percentil = values.length / this.data.length;
        return Math.ceil(percentil * 100); 
    }
}

module.exports = Data;
