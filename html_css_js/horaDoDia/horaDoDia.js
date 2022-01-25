function carregar(){
var mensagem = window.document.getElementById('msg')
var foto = window.document.getElementById('imagem')
var ola = window.document.getElementById('saudacao')
var data = new Date()
var hora = data.getHours()
mensagem.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora < 12){
    ola.innerHTML = 'Bom dia!'
    //BOM DIA!
    foto.src = 'manhaCorreta.jpg'
    document.body.style.background = '#F3C563'
} else if (hora >= 12 && hora < 18){
    ola.innerHTML = 'Boa tarde!'
    //BOA TARDE!
    foto.src = 'tardeCorreta.jpg'
    document.body.style.background = '#FAC052'
} else {
    ola.innerHTML = 'Boa noite!'
    //BOA NOITE!
    foto.src = 'noiteCorreta.jpg'
    document.body.style.background = '#213768'
    }
}