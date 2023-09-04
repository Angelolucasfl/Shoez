import { lerLocal, desenharCarrinhoSimples } from "./src/utilidades";

function criarPedidoHistorico(pedidoData){
    const elementoPedido = `<p class="text-xl font-bold">${new Date(pedidoData.dataPedido).toLocaleDateString('pt-BR', {hour: "2-digit", minute: "2-digit"})}</p>
    <section class="bg-white p-3 rounded-lg" id="container-pedidos-${pedidoData.dataPedido}">

    </section>`;
    const main = document.getElementsByTagName('main')[0];
    main.innerHTML += elementoPedido;

    for(const idProduto in pedidoData.pedido){
        desenharCarrinhoSimples(idProduto, `container-pedidos-${pedidoData.dataPedido}`, pedidoData.pedido[idProduto]);
    }
}

function renderizarHistorico(){
    const historico = lerLocal("historico");
    for(const pedidoData of historico){
        criarPedidoHistorico(pedidoData);
    }
}

renderizarHistorico();