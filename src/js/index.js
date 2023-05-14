// Pegar no JS o elemento HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// Pegar no JS o Body
const body = document.querySelector("body");

const imagemBotaoTrocaTema = document.querySelector(".imagem-botao");


// Dar um jeito de identificar um clique no botão de alterar tema
botaoAlterarTema.addEventListener("click",() => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    // adiciona e remove a classe modo escuro
    body.classList.toggle("modo-escuro");

    // caso ja tenha o modo escuro, remover a classe e voltar a exibir o sol
    if (modoEscuroEstaAtivo) {
        // remover a classe do body
        //body.classList.remove("modo-escuro");

        // trocar a imagem do botão para o sol
        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/sun.png")
    
    }else{
        // Adicionar a classe modo escuro no body
        //body.classList.add("modo-escuro");
        
        // trocar a imagem do botão para lua
        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/moon.png")
    }

})


