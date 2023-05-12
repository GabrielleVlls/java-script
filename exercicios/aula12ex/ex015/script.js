function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 18) {
                //criança
                img.setAttribute('src', 'imagens/manha.png.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/tarde.png.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/noite.png.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/manha.png.jpg')
            }
        }  else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 18) {
                //criança
                img.setAttribute('src', 'imagens/manha.png.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/tarde.png.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/noite.png.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/manha.png.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}