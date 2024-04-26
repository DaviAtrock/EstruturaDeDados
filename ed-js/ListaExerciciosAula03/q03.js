const cardapio = {
    100: { nome: "Cachorro Quente", preco: 1.70 },
    101: { nome: "Bauru Simples", preco: 2.30 },
    102: { nome: "Bauru com Ovo", preco: 2.60 },
    103: { nome: "Hamburguer", preco: 2.40 },
    104: { nome: "Cheeseburguer", preco: 2.50 },
    105: { nome: "Refrigerante", preco: 1.00 }
};

let valorTotal = 0;

do {
    let codigo = parseInt(prompt("Digite o código do produto (ou 0 para finalizar):"));

    if (codigo !== 0 && !(codigo in cardapio)) {
        alert("Código de produto inválido!");
        continue;
    }

    if (codigo === 0) {
        break;
    }

    let quantidade = parseInt(prompt("Digite a quantidade:"));

    if (quantidade <= 0) {
        alert("Quantidade inválida!");
        continue;
    }

    let precoUnitario = cardapio[codigo].preco;
    valorTotal += precoUnitario * quantidade;

} while (true);

console.log("Valor total a pagar: R$ " + valorTotal.toFixed(2));
