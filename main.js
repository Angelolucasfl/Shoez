import { renderizarCatalogo } from "./src/cardProduto";
import { filtrosInit } from "./src/filtrosCatalogo";
import { carrinhoInit, atualizarPrecoCarrinho, renderizarProdutosCarrinho } from "./src/menuCarrinho";

renderizarCatalogo();
carrinhoInit();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
filtrosInit();
