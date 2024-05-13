let num = [1, 2, 3, 4, 5]

console.log(num)

num[5] = 6

console.log(num)

num = [4, 5, 1, 2, 6, 3]

console.log(num)

num.sort()

console.log(num)

let valores = [8, 1, 7, 4, 2, 9]

for (let index = 0; index < valores.length; index++) {
    console.log(`A posição ${index} tem o valor ${valores[index]}`)
}

for (let numero in valores) {
    console.log(`A posição ${numero} tem o valor ${valores[numero]}`)
}

let test = valores.indexOf(12)

console.log(test)