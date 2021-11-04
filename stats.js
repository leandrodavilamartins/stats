class Data {
    constructor(...arrayToPass){
        this.data = arrayToPass[0];
    }
    
    contador(){
        return this.data.length;
    }

    soma(){
        let soma = 0;
        this.data.forEach( item => {
            soma += item;
        })
        return soma;
    }

    media(){
        let soma = this.soma();
        return soma / this.data.length;
    }

    variancia(){
        let pre_sum = [];
        this.data.forEach( item => {
            let result = item - this.media()
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

    desvio(){
        let result = Math.sqrt(this.variancia())
        return result; 
    }

    cv(){
        let result = this.desvio() / this.media()
        return result;
    }
}

module.exports = Data;
