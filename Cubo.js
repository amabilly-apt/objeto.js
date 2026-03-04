class Cubo{
    constructor(aresta = 1,cor = 'roxo'){
        this.aresta = aresta
        this.cor = cor

    }

    //calculo do volume do cubo
    calcularVolume(){
        return (this.aresta * this.aresta * this.aresta)
    }

    //calculo da area lateral

    calcularAreaLateral(){
        return 4 * (this.aresta * this.aresta)
        
    }

    //calculo da area total do cubo
    calcularAreaTotal(){
        return 6 * (this.aresta * this.aresta)
    }
}
        module.exports = Cubo
