import { addCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";

export function renderizarCatalogo() {
  for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class="border-solid border-2 w-80 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${produtoCatalogo.feminino ? 'feminino' : 'masculino'}" id="container-produto-${produtoCatalogo.id}">
          <img class="p-2 group-hover:scale-105 duration-300 -z-50 rounded-lg" src="assets/${produtoCatalogo.imagem}" alt="Produto ${produtoCatalogo.id}">
          <p class="text-sm">Tênis ${produtoCatalogo.marca}</p>
          <p class="text-sm">${produtoCatalogo.nome}</p>
          <p class="text-sm">$${produtoCatalogo.preco}</p>
          <button id="adicionar-${produtoCatalogo.id}" class="bg-slate-500 text-white hover:bg-slate-950"><i class="fa-solid fa-cart-plus"></i></button>
          </div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
  }

  for(const produtoCatalogo of catalogo){
    document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener('click', () => addCarrinho(produtoCatalogo.id));
  }
}
