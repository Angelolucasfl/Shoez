const catalogoProdutos = document.getElementById("container-produto");

function exibirTudo(){
    const produtosEscondidos = Array.from(catalogoProdutos.getElementsByClassName("hidden"));

    for (const produto of produtosEscondidos){
        produto.classList.remove("hidden");
    }
}

function esconderMasculino(){
    exibirTudo();
    const produtosMasculinos = Array.from(catalogoProdutos.getElementsByClassName("masculino"));

    for (const produto of produtosMasculinos){
        produto.classList.add("hidden");
    }
}

function esconderFemininos(){
    exibirTudo();
    const produtosFemininos = Array.from(catalogoProdutos.getElementsByClassName("feminino"));

    for (const produto of produtosFemininos){
        produto.classList.add("hidden");
    }
}

export function filtrosInit(){
    document.getElementById("exibir-femininos").addEventListener("click", esconderMasculino);
    document.getElementById("exibir-masculinos").addEventListener("click", esconderFemininos);
    document.getElementById("exibir-todos").addEventListener("click", exibirTudo);
}