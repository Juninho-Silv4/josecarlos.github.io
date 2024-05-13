function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            if(idade >= 0 && idade < 5) {
                //Bebê
                genero = 'Bebê'
                img.setAttribute('src', './imagens/bebe-h.png')
                res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
            } else if (idade < 10) {
                //Criança
                genero = 'Menino'
                img.setAttribute('src', './imagens/menino.png')
                res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
            } else if (idade < 21) {
                //Jovem
                genero = 'Jovem'
                img.setAttribute('src', './imagens/garoto.png')
                res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
            } else if (idade < 50) {
                //Adulto
                genero = 'Homem'
                img.setAttribute('src', './imagens/adulto.png')
                res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
            } else {
                //Idoso
                genero = 'Idoso'
                img.setAttribute('src', './imagens/idoso.png')
                res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
            }
        } else if (fsex[1].checked) {
            if(idade >= 0 && idade < 5) {
                //Bebê
                genero = 'Bebê'
                img.setAttribute('src', './imagens/bebe-m.png')
                res.innerHTML = `Detectamos uma ${genero} com ${idade} anos.`
            } else if (idade < 10) {
                //Criança
                genero = 'Menina'
                img.setAttribute('src', './imagens/menina.png')
                res.innerHTML = `Detectamos uma ${genero} com ${idade} anos.`
            } else if (idade < 21) {
                //Jovem
                genero = 'Jovem'
                img.setAttribute('src', './imagens/garota.png')
                res.innerHTML = `Detectamos uma ${genero} com ${idade} anos.`
            } else if (idade < 50) {
                //Adulta
                genero = 'Mulher'
                img.setAttribute('src', './imagens/adulta.png')
                res.innerHTML = `Detectamos uma ${genero} com ${idade} anos.`
            } else {
                //Idosa
                genero = 'Idosa'
                img.setAttribute('src', './imagens/idosa.png')
                res.innerHTML = `Detectamos uma ${genero} com ${idade} anos.`
            }
        } else if (fsex[2].checked) {
            if(idade >= 0 && idade < 5) {
                //Bebê
                genero = 'Bebê'
                img.setAttribute('src', './imagens/bebe-neutro.png')
                res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
            } else if (idade < 10) {
                //Criança
                genero = 'Criança'
                img.setAttribute('src', './imagens/crianca-neutro.png')
                res.innerHTML = `Detectamos uma ${genero} com ${idade} anos.`
            } else if (idade < 21) {
                //Jovem
                genero = 'Jovem'
                img.setAttribute('src', './imagens/jovem-neutro.png')
                res.innerHTML = `Detectamos uma Pessoa ${genero} com ${idade} anos.`
            } else if (idade < 50) {
                //Adulta
                genero = 'Pessoa'
                img.setAttribute('src', './imagens/adulto-neutro.png')
                res.innerHTML = `Detectamos uma ${genero} com ${idade} anos.`
            } else {
                //Idosa
                genero = 'Idosa'
                img.setAttribute('src', './imagens/idoso-neutro.png')
                res.innerHTML = `Detectamos uma Pessoa ${genero} com ${idade} anos.`
            }
        }
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}    