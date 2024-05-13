function parimpar (n){
    if (n%2 == 0){
        return 'Par!'
    } else {
        return 'Impar!'
    }
}


console.log(parimpar(223))

let v = function(x) {
    return x * 2
}

console.log(v(5))


function fatorial (x) {
    let fat = 1
    for (let c = x; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

function fat (x) {
    if (x == 1) {
        return 1
    } else {
        return x * fat(x-1)
    }
}

console.log(fat(5))