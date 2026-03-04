// r = raio do cone e h = altura do cone
class Cone{
    constructor(r,h){
        this.r = r
        this.h = h
    }

    //calculo do volume
    calcularVolume(){
        return (1/3) * Math.PI * this.r * this.r * this.h
    }


}
module.exports = Cone