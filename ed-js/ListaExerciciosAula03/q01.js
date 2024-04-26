
const valores = [2.5, 3.8, 1.2, 5.7, 4.3, 6.1, 2.9, 8.4, 9.2, 3.6, 7.8, 5.5, 6.9, 4.6, 1.8, 2.3, 7.2, 5.4, 3.1, 9.8];

let somatorio = 0;

let i = 0;

while (i < valores.length) {
    somatorio += valores[i];
    i++;
}

console.log("O somatório dos valores é: " + somatorio);