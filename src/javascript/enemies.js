const inimigo_container = document.querySelector(".TelaJogo__enemies_container")

CriarInimigos()

function CriarInimigos() {

    const inimigo = document.createElement('img')
    inimigo.setAttribute("src", "./src/assets/images/enemies/dinossauro.gif")
    inimigo.setAttribute("class", "TelaJogo__enemies movimento_inimigo")
    inimigo_container.appendChild(inimigo)

    const inimigoColisao = document.createElement('div')
    inimigoColisao.setAttribute("class", "colisao_enemie movimento_inimigo")
    inimigo_container.appendChild(inimigoColisao)


    inimigo.addEventListener("animationend", (event)=> {
        //console.log("animação acabou", event.animationName)
        inimigo_container.removeChild(inimigo_container.lastChild)
        inimigo_container.removeChild(inimigo_container.lastChild)
        CriarInimigos()
    })
}