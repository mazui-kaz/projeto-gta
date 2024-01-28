const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    //const botaoAtivo = !elementoPlataformas.classList.contains("ativo");

    elementoPlataformas.classList.toggle("ativo");

    // if(botaoAtivo){
    //     elementoPlataformas.classList.add("ativo");
    // }else{
    //     elementoPlataformas.classList.remove("ativo");
    // }
});
