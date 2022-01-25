function calcular(){
    var numero = document.getElementById('numero')
    var mensagem = document.getElementById('mensagem')

    if(numero.value.length == 0) {
        mensagem.innerHTML='Digite o campo para ter a tabuada desejada!'
    } else {
    var cont = 0
    var contadora = Number(cont.value)
    var num = Number(numero.value)
    //var tab = cont*numero
    //var tabNum = Number(tab.value)
    mensagem.innerHTML = ''

    for(contadora=0; contadora <= 10; contadora=contadora+1){
        var tabNum = contadora*num
        mensagem.innerHTML += (`${num} x ${contadora} = ${tabNum}</br>`)
        }
    }
}
