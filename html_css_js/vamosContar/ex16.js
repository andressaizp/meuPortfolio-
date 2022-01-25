function contar() {
    let cont = window.document.getElementById('inicio')
    let n2 = window.document.getElementById('fim')
    let n3 = window.document.getElementById('passo')
    let mensagem = document.getElementById('mensagem')

    if(cont.value.length == 0 || n2.value.length == 0 || n3.value.length ==0) {
        window.alert('Digite todos os dados!')
    } else {
        let c = Number(cont.value)
        let num2 = Number(n2.value)
        let num3 = Number(n3.value)
        if(c < num2) {   
            //Contagem crescente 
            for(let contadora = c; contadora <= num2; contadora+=num3){
            mensagem.innerHTML += `${contadora} \u{1F449}`
        } 
    } else {
        //Contagem decrescente
            for(let contadora = c; contadora >= num2; contadora-=num3){
                mensagem.innerHTML += `${contadora} \u{1F449}`
            }
        }

    }
}