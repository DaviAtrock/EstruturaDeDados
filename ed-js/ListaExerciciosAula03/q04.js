let totalCobaias = 0;
let totalCoelhos = 0;
let totalRatos = 0;

for (let i = 1; i <= 15; i++) {
    let valor = parseInt(prompt(`Informe o número de cobaias da experiência ${i}:`));
    let codigo = parseInt(prompt(`Informe o código da cobaia (1 para coelho, 2 para rato):`));

    totalCobaias += valor;

    if (codigo === 1) {
        totalCoelhos += valor;
    } else if (codigo === 2) {
        totalRatos += valor;
    } else {
        alert("Código inválido. Utilize 1 para coelho ou 2 para rato.");
        i--;
    }
}

let percentualCoelhos = (totalCoelhos / totalCobaias) * 100;
let percentualRatos = (totalRatos / totalCobaias) * 100;

console.log("Total de cobaias utilizadas: " + totalCobaias);
console.log("Total de coelhos: " + totalCoelhos);
console.log("Total de ratos: " + totalRatos);
console.log("Percentual de coelhos: " + percentualCoelhos.toFixed(2) + "%");
console.log("Percentual de ratos: " + percentualRatos.toFixed(2) + "%");
