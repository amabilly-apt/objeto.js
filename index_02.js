//comando de instalação da biblioteca
//npm install --save readline-sync

const rl = require('readline-sync')

//importando as classes
const Cubo = require('./Cubo')

let opcao = 0 

do{
console.log('|-------------------------|')
console.log('|-- 1 = Cilindro ---------|')
console.log('|-- 2 = Cone -------------|')
console.log('|-- 3 = Cubo -------------|')
console.log('|-------------------------|')
console.log('\n')

opcao = Number(rl.question(`qual a sua opcao`))
console.log(opcao)

if(opcao === 1){
    console.log('cilindro')
}else if(opcao == 2){
    console.log('Cone')
}else if(opcao ===  3){
    //programar classe

    let aresta = Number(rl.question(`qual o valor da aresta:`))
    let cubo = new Cubo(aresta)
    let areaLateral = cubo.calcularAreaLateral()
    let areaTotal = cubo.calcularAreaTotal()
    let volume = cubo.calcularVolume()

    console.log(`A area Lateral do cubo de aresta ${aresta} é ${areaLateral}cm²`)
    console.log(` a area total do cubo de aresta ${aresta} é ${areaTotal}cm²`)
    console.log(`o volume do cubo de aresta ${aresta} é ${volume}cm²`)
    

}else{
    console.log('opção inválida. Digite novamente!')
}

}while(opcao !== 0)
    console.log(`fim do programa`)
