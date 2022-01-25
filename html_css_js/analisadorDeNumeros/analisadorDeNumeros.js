let numerosEscolhidos = document.getElementById('numeroEscolhido')
let listaNumeros = document.getElementById('listaNumeros')
let listaEscolhidos = []

function adicionar(){
let numeros = Number(numerosEscolhidos.value)
let verificacao = listaEscolhidos.indexOf(numeros)

if(verificacao != -1){
window.alert('Você não pode adicionar esse número, pois ele já existe!')
numerosEscolhidos.value=' '
return
    } else if(numeros>100 || numeros <0){
        window.alert('Número não aceito pelo sistema! Preste atenção no enunciado!')
        numerosEscolhidos.value=' '
        return
    }

listaEscolhidos.push(numeros)
listaNumeros.innerHTML += `O número escolhido foi ${numeros}</br>`
numerosEscolhidos.value = ' '
}

function analisar(){
    if (listaEscolhidos.length===0){
        window.alert('Coloque pelo menos um valor no campo!')
        analise.innerHTML=' '
        return
    }
    let analise = document.getElementById('analiseDados')
    let soma = 0
    for(var cont=0; cont < listaEscolhidos.length; cont++){
        soma+=listaEscolhidos[cont]
    }
    let media = soma/(listaEscolhidos.length)

    Array.min = function(array) {
        return Math.min.apply(Math, array)
    }

    analise.innerHTML=`A lista que você fez tem um total de ${listaEscolhidos.length} itens</br>`
    analise.innerHTML+=`A soma dos itens da lista é ${soma}</br>`
    analise.innerHTML+=`A média dos valores é ${media}</br>`
    analise.innerHTML+=`O menor valor é ${Array.min(listaEscolhidos)}`

}
