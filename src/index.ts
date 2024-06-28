// // let [numeroA, numeroB] = [3,6]
// // let resultado = numeroA * numeroB
// // for (let i = 0; i < numeroA; i++){
// //     resultado = resultado - numeroB
// // }
// // console.log(resultado)
// dividirNumero(35)
// dividirNumero(7)


// function dividirNumero(numero: number) {
//     if(numero % 5 == 0 && numero % 7 == 0){
//         console.log('É divisível por 5 e 7')
//     } else {
//         console.log('Não é divisível por 5 e 7')
//     }
// }


// let numeros: number[] = [7,15,12,14,8,26,35,22,33]
// let result: number[] =[]
// for(let i = numeros.length - 1; i >= 0;i --){
//     result.push(numeros [i])
// }

// console.table(result)

// let texto = 'everton'
// let resto = ""
// for(let i = 1; i < texto.length; i++){
//     resto = resto + texto[i]
// }
// console.log(texto[0].toUpperCase() + resto)

//let numeros: number[] = [7,15,12,14,8,26,35,22,33]
//console.log(numeros.at(0))

// let array = [
//     [5,3],
//     [1,2,7,8],
//     [4,8]
// ]

// for(let i =0; i < array.length; i++){
//     for(let j =0; j < array[i].length; j++)
//         console.log(array[i][j])
// }

// function multiPorn(array: number[][], number: number){
//     for(let i =0; i< array.length; i++){
//         for(let j=0 ; j < array[i].length; j++)
//             console.log(array[i][j] * number)
//         }
//     }
//     let array = [
//         [1,5,6,8],
//         [5,6,7,5]
//     ]
//     multiPorn(array, 10)

// function somar(array: number[][]){
//     let soma = 0
//     for (let i =0; i < array.length; i ++){
//         for(let j = 0; j< array[i].length; j++)
//             soma= soma + array[i][j]
//         if(soma >0)
//             return true
//         return false
//     }
// }
// let array = [
//     [1,5,9,8],
//     [8,5,6,2]
// ]

let [nA, nB, nC, nD] = [1,5,6,5]
let [pA, pB, pC, pD] = [3,1,4,2]

let expressão = ((nA*pA) + (nB*pB) + (nC*pC) + (nD*pD))/(pA + pB + pC + pD)
console.log(expressão)