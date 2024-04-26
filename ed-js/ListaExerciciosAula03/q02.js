let valores = [];
let somatorio = 0;
let contador = 0;

do {
    let valor = parseFloat(prompt("Digite um valor real:"));
    
    valores.push(valor);
    
    contador++;
} while (contador < 20);

for (let i = 0; i < valores.length; i++) {
    somatorio += valores[i];
}

console.log("O somatório dos valores é: " + somatorio);
