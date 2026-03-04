class Cilindro{
    constructor(raio = 1, cor = 'roxo', altura = 1){
        this.raio = raio
        this.cor = cor 
        this.altura = altura
    }   

    //calcular volume
    calcularVolume(){
        return Math.PI * this.raio * this.raio
    }

    calcularAreaLateral(){
      return  2 * Math.PI * this.raio * this.altura 
    }

    calcularAreaTotal(){
       2 * this.calcularVolume() + this.calcularAreaLateral()
    }
}
module.exports = Cilindro
