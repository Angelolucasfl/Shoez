import { catalogo, salvarLocal, lerLocal } from "./utilidades";

const idsProdutoCarrinhoQuantidade = lerLocal('carrinho') ?? {};

function abrirCarrinho() {
  document.getElementById("carrinho").classList.remove("right-[360px]");
  document.getElementById("carrinho").classList.add("right-[0px]");
}

function fecharCarrinho() {
  document.getElementById("carrinho").classList.remove("right-[0px]");
  document.getElementById("carrinho").classList.add("right-[-360px]");
}

function goCheckout(){
  if(Object.keys(idsProdutoCarrinhoQuantidade).length === 0){
    return
  }
  window.location.href = window.location.origin + "/checkout.html";
}

export function carrinhoInit() {
  const fecharCarrinhoBtn = document.getElementById("fechar-carrinho");
  const abrirCarrinhoBtn = document.getElementById("abrir-carrinho");
  const botaoGoCheckout = document.getElementById("finalizar-compra");

  fecharCarrinhoBtn.addEventListener("click", fecharCarrinho);
  abrirCarrinhoBtn.addEventListener("click", abrirCarrinho);
  botaoGoCheckout.addEventListener("click", goCheckout);
}

function addQuantidadeProduto(idProduto) {
  idsProdutoCarrinhoQuantidade[idProduto]++;
  salvarLocal('carrinho', idsProdutoCarrinhoQuantidade);
  atualizarQuantidade(idProduto);
  atualizarPrecoCarrinho();
}

function removeQuantidadeProduto(idProduto) {
  if (idsProdutoCarrinhoQuantidade[idProduto] === 1){
    removerDoCarrinho(idProduto);
    return;
  }
  idsProdutoCarrinhoQuantidade[idProduto]--;
  salvarLocal('carrinho', idsProdutoCarrinhoQuantidade);
  atualizarQuantidade(idProduto);
  atualizarPrecoCarrinho();
}

function removerDoCarrinho(idProduto) {
  delete idsProdutoCarrinhoQuantidade[idProduto];
  salvarLocal('carrinho', idsProdutoCarrinhoQuantidade);
  renderizarProdutosCarrinho();
  atualizarPrecoCarrinho();
}

function atualizarQuantidade(idProduto) {
  document.getElementById(`quantidade-${idProduto}`).innerText =
    idsProdutoCarrinhoQuantidade[idProduto];
}

function desenharCarrinho(idProduto) {
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutosCarrinho =
    document.getElementById("produtos-carrinho");

  const elementoArticle = document.createElement("article");
  const articleClasses = [
    "flex",
    "bg-slate-100",
    "rounded-lg",
    "p-1",
    "relative",
  ];

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }

  const cardProdutoCarrinho = `<button id="remover-item-${
    produto.id
  }"><i class="fa-solid fa-circle-xmark text-slate-600 absolute top-1 right-1 hover:text-slate-900"></i></button>
  <img src="assets/img/${produto.imagem}" alt="Tenis ${
    produto.nome
  }" class="h-24 rounded-lg">
  <div class="p-2 flex flex-col justify-between">
    <p class="text-slate-900 text-sm">Tenis ${produto.marca} - ${
    produto.nome
  }</p>
    <p class="text-slate-500 text-md">$${produto.preco}</p>
  </div>
  <div class="flex text-slate-900 items-end absolute bottom-0 right-2 text-xl">
    <button id='decrementar-produto-${produto.id}'>-</button>
    <p id='quantidade-${produto.id}' class="ml-2">${
    idsProdutoCarrinhoQuantidade[produto.id]
  }</p>
    <button id='incrementar-produto-${produto.id}' class="ml-2">+</button>
  </div>`;

  elementoArticle.innerHTML = cardProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);

  document
    .getElementById(`decrementar-produto-${produto.id}`)
    .addEventListener("click", () => removeQuantidadeProduto(idProduto));

  document
    .getElementById(`remover-item-${produto.id}`)
    .addEventListener("click", () => removerDoCarrinho(produto.id));

  document
    .getElementById(`incrementar-produto-${produto.id}`)
    .addEventListener("click", () => addQuantidadeProduto(idProduto));
}

export function renderizarProdutosCarrinho() {
  const containerProdutosCarrinho =
    document.getElementById("produtos-carrinho");
  containerProdutosCarrinho.innerHTML = "";
  for (const idProduto in idsProdutoCarrinhoQuantidade) {
    desenharCarrinho(idProduto);
  }
}

export function addCarrinho(idProduto) {
  if (idProduto in idsProdutoCarrinhoQuantidade) {
    addQuantidadeProduto(idProduto);
    return;
  }
  idsProdutoCarrinhoQuantidade[idProduto] = 1;
  salvarLocal('carrinho', idsProdutoCarrinhoQuantidade);
  desenharCarrinho(idProduto);
  atualizarPrecoCarrinho();
}

export function atualizarPrecoCarrinho(){
  const precoCarrinho = document.getElementById("preco-total");
  let precoTotalCarrinho = 0;
  for(const idProdutoCarrinho in idsProdutoCarrinhoQuantidade){
    precoTotalCarrinho += catalogo.find(p => p.id === idProdutoCarrinho).preco * idsProdutoCarrinhoQuantidade[idProdutoCarrinho];
  }
  precoCarrinho.innerText = `Total: $${precoTotalCarrinho}`;
}