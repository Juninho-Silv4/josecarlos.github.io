var data = new Date()
var hora = data.getHours()
var c = 1


//Executa depois verifica
/*
do {
    console.log(`${c} - Tudo bem?`)
    c++
} while (c <= hora)
*/

//Verifica depois executa
/*
while (c <= hora) {
    console.log(`${c} - Tudo bem?`)
    c++
}
*/

for(c; c <= hora; c++) {
    console.log(`${c} - Tudo bem?`)
}

/*
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
*/