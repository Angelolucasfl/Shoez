export const catalogo = [
  {
    id: "1",
    nome: "Court Vision Lo - Feminino",
    marca: "Nike",
    preco: "400",
    imagem: "shoe1.jpg",
    feminino: true,
  },
  {
    id: "2",
    nome: "All Star CT AS Core OX CT0001",
    marca: "Converse",
    preco: "200",
    imagem: "shoe2.jpg",
    feminino: true,
  },
  {
    id: "3",
    nome: "Runfalcon 3.0 - Feminino",
    marca: "Adidas",
    preco: "350",
    imagem: "shoe3.jpg",
    feminino: true,
  },
  {
    id: "4",
    nome: "Air Winflo 9 - Feminino",
    marca: "Nike",
    preco: "320",
    imagem: "shoe4.jpg",
    feminino: true,
  },
  {
    id: "5",
    nome: "Smash V3 BDP",
    marca: "Puma",
    preco: "240",
    imagem: "shoe5.jpg",
    feminino: false,
  },
  {
    id: "6",
    nome: "Revolution 6 Psv",
    marca: "Nike",
    preco: "280",
    imagem: "shoe6.jpg",
    feminino: false,
  },
  {
    id: "7",
    nome: "Court Vision Mid - Masculino",
    marca: "Nike",
    preco: "580",
    imagem: "shoe7.jpg",
    feminino: false,
  },
  {
    id: "8",
    nome: "RSV367 New - Masculino",
    marca: "Reserva",
    preco: "180",
    imagem: "shoe8.jpg",
    feminino: false,
  },
];

export function salvarLocal(chave, info) {
  localStorage.setItem(chave, JSON.stringify(info));
}

export function lerLocal(chave) {
  return JSON.parse(localStorage.getItem(chave));
}

export function apagarLocal(chave){
  localStorage.removeItem(chave);
}

export function desenharCarrinhoSimples(idProduto, idContainerHTML, quantidadeProduto) {
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutosCarrinho = document.getElementById(idContainerHTML);

  const elementoArticle = document.createElement("article");
  const articleClasses = [
    "flex",
    "bg-sky-300",
    "rounded-lg",
    "p-1",
    "relative",
    "mb-4",
    "w-96",
  ];

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }

  const cardProdutoCarrinho = `<img src="assets/img/${
    produto.imagem
  }" alt="Tenis ${produto.nome}" class="h-24 rounded-lg">
  <div class="p-2 flex flex-col justify-between">
    <p class="text-slate-900 text-sm">Tenis ${produto.marca} - ${
    produto.nome
  }</p>
    <p class="text-slate-500 text-md">$${produto.preco}</p>
  </div>
  <div class="flex text-slate-900 items-end absolute bottom-0 right-2 text-xl">
    <p id="quantidade-${produto.id}" class="ml-2">${
    quantidadeProduto
  }</p>
  </div>`;

  elementoArticle.innerHTML = cardProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);
}
