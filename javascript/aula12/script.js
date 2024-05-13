    function carregar() {
        var msg1 = window.document.getElementById('msg1')
        var msg2 = window.document.getElementById('msg2')
        var img = window.document.getElementById('imagem')

        var data = new Date()
        var hora = data.getHours()
        var minu = data.getMinutes()
        if (hora >= 0 && hora < 6) {
            if (hora == 1) {
                msg1.innerHTML = `Agora são: ${hora} hora e ${minu} minutos!`
                msg2.innerHTML = `Está de madrugada!`
                img.src = 'imagens/madrugada 1.png'
                document.body.style.background = '#C38BAE'
            } else {
                msg1.innerHTML = `Agora são: ${hora} hora e ${minu} minutos!`
                msg2.innerHTML = `Está de madrugada!`
                img.src = 'imagens/madrugada 2.png'
                document.body.style.background = '#152244'
            }
        } else if (hora == 6) {
            msg1.innerHTML = `Agora são: ${hora} horas e ${minu} minutos!`
            msg2.innerHTML = `Está amanhecendo!`
            img.src = 'imagens/amanhecer 1.png'
            document.body.style.background = '#FC9572'
        } else if (hora >= 7 && hora < 13) {
            msg1.innerHTML = `Agora são: ${hora} horas e ${minu} minutos!`
            msg2.innerHTML = `Está de manhã!`
            img.src = 'imagens/manha 1.png'
            document.body.style.background = '#C9CD38'
        } else if (hora >= 13 && hora < 18) {
            msg1.innerHTML = `Agora são: ${hora} horas e ${minu} minutos!`
            msg2.innerHTML = `Está de tarde!`
            img.src = 'imagens/tarde 3.png'
            document.body.style.background = '#C4A119'
        } else if (hora == 18) {
            msg1.innerHTML = `Agora são: ${hora} horas e ${minu} minutos!`
            msg2.innerHTML = `Está anoitecendo!`
            img.src = 'imagens/anoitecer 2.png'
            document.body.style.background = '#F7B05B'
        } else {
            msg1.innerHTML = `Agora são: ${hora} horas e ${minu} minutos!`
            msg2.innerHTML = `Está de noite!`
            img.src = 'imagens/noite 2.png'
            document.body.style.background = '#4B51B4'
        }
    }
    