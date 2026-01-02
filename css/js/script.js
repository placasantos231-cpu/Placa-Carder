let carrinho = [];

function add(nome, preco) {
    carrinho.push({ nome, preco });
    render();
}

function render() {
    const itens = document.getElementById("itens");
    const totalEl = document.getElementById("total");

    itens.innerHTML = "";
    let total = 0;

    carrinho.forEach(item => {
        itens.innerHTML += `<p>${item.nome} - R$ ${item.preco.toFixed(2)}</p>`;
        total += item.preco;
    });

    totalEl.innerText = total.toFixed(2);
}

function finalizar() {
    if (carrinho.length === 0) {
        alert("Carrinho vazio!");
        return;
    }

    let mensagem = "Pedido - Placa Carder\n\n";
    let total = 0;

    carrinho.forEach(item => {
        mensagem += `${item.nome} - R$ ${item.preco.toFixed(2)}\n`;
        total += item.preco;
    });

    mensagem += `\nTotal: R$ ${total.toFixed(2)}`;

    const telefone = "55SEUNUMEROAQUI";
    window.open(`https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`, "_blank");
}

