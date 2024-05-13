let num = document.querySelector('input#numero')
let tab = document.querySelector('select#exibc')
let res = document.querySelector('div#res')
let vetor = []

function EhNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100 ) {
        return true;
    } else {
        return false
    }
}

function adicionar(numer, lista) {
    if (lista.indexOf(Number(numer))  != -1) {
        return true
    } else {
        return false
    }
}

function enfileira() {
    if (EhNumero(num.value) && !(adicionar(num.value, vetor))) {
       vetor.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Valor ${num.value} adicionado.`
       tab.appendChild(item)
       res.innerHTML = ''
    } else {
       window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

console.log(vetor)

function calculos() {
    if(vetor.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = vetor.length
        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0
        let media = 0
        for(let pos in vetor) {
            soma += vetor[pos]
            if (vetor[pos] > maior) {
                maior = vetor[pos]
            }
            if (vetor[pos] < menor) {
                menor = vetor[pos]
            }
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        media = soma / tot
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}