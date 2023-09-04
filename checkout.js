import { desenharCarrinhoSimples, lerLocal, apagarLocal, salvarLocal } from "./src/utilidades";
import { atualizarPrecoCarrinho } from "./src/menuCarrinho";

function desenharProdutosCheckout(){
    const idsProdutoCarrinhoQuantidade = lerLocal("carrinho") ?? {};

    for( const idProduto in idsProdutoCarrinhoQuantidade){
        desenharCarrinhoSimples(idProduto, "container-produto-checkout", idsProdutoCarrinhoQuantidade[idProduto]);
    }
}

function finalizarCompra(evento) {
    evento.preventDefault();
    const idsProdutoCarrinhoComQuantidade = lerLocal("carrinho") ?? {};
    if (Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
      return;
    }
  
    const dataAtual = new Date();
    const pedidoFeito = {
      dataPedido: dataAtual,
      pedido: idsProdutoCarrinhoComQuantidade,
    };
    const historicoDePedidos = lerLocal("historico") ?? [];
    const historicoDePedidosAtualizado = [pedidoFeito, ...historicoDePedidos];
  
    salvarLocal("historico", historicoDePedidosAtualizado);
    apagarLocal("carrinho");
  
    window.location.href = "./pedidos.html";
}

atualizarPrecoCarrinho();
desenharProdutosCheckout();

document.addEventListener("submit", (evt) => finalizarCompra(evt));

