let gameOver = false
const telaGameOver = document.querySelector(".TelaJogo__gameOver")

const mountain_back_animation = document.querySelectorAll(".mountain_back_container__item")
const mountain_front_animation = document.querySelectorAll(".mountain_container__item")
const clouds_animation = document.querySelectorAll(".clouds_container__item")

let pontuacaoAtual = 0
const exibirPontuacao = setInterval(()=>{
     pontuacaoAtual += 1
     document.querySelector(".score").innerHTML = `${pontuacaoAtual}`;
}, 0)

const colisao = setInterval(()=>{
    const inimigoSprite = document.querySelector(".colisao_enemie")
    let posicaoPlayer = playerColisao.getBoundingClientRect();
    let posicaoInimigo = inimigoSprite.getBoundingClientRect();

    const player = {x: posicaoPlayer.x, y: posicaoPlayer.y, width: posicaoPlayer.width, height: posicaoPlayer.height}

    const inimigo = {x: posicaoInimigo.x, y: posicaoInimigo.y, width: posicaoInimigo.width, height: posicaoInimigo.height}

    if (
        player.x < inimigo.x + inimigo.width &&
        player.x + player.width > inimigo.x &&
        player.y < inimigo.y + inimigo.height &&
        player.y + player.height > inimigo.y
      ) {
        //console.log("COLISÃO DETECTADA!!!")
        //console.log("colisão desativada!!!")
        GameOver()
        cenarioGameOver()
        mostrarPontuacaoFinal()
        telaGameOver.style.display = "flex";
      }
})

function GameOver() {
  CriarInimigos = ()=> {}

  playerSprite.setAttribute('src', './src/assets/images/player-character/Mega-Man/death.gif')
  playerSprite.style = "width: 180px; height: 210px"
  gameOver = true

  // clearInterval(nuvens)
  // clearInterval(montanhasAtras)
  // clearInterval(montanhasFrente)

  clearInterval(exibirPontuacao)

  clearInterval(colisao)
  
  document.onbeforeunload = null;

}

function cenarioGameOver(){

  setTimeout(() => {

      //console.log("Animação Pausada")

      mountain_back_animation.forEach(item => {

        item.style.animationPlayState = "paused"; // Pausa a animação

      });

      mountain_front_animation.forEach(item => {

        item.style.animationPlayState = "paused"; // Pausa a animação

      });

      clouds_animation.forEach(item => {

          item.style.animationPlayState = "paused"; // Pausa a animação

      });

  }, 1000 * 2)

  // const removerMontanhaAtras = document.querySelectorAll(".cenario__mountain_front")
  // removerMontanhaAtras.forEach((elemento)=>{
  //   elemento.remove()
  // })

  // const removerMontanhaFrente = document.querySelectorAll(".cenario__mountain_back")
  // removerMontanhaFrente.forEach((elemento)=>{
  //   elemento.remove()
  // })

  // for (const child of container_nuvens.children) {
  //   child.remove();
  // }

  // const nuvem = document.createElement('img')
  // nuvem.setAttribute("src", "src/assets/images/backgrounds/layers/clouds_mid_large.png")
  // nuvem.setAttribute("class", "cenario__clouds_back")
  // container_nuvens.appendChild(nuvem)

  // const montanhaF = document.createElement('img')
  // montanhaF.setAttribute("src", "src/assets/images/backgrounds/layers/grassy_mountains_extra_large.png")
  // montanhaF.setAttribute("class", "cenario__mountain_front")
  // container_montanhas_frente.appendChild(montanhaF)

  // const montanhaA = document.createElement('img')
  // montanhaA.setAttribute("src", "src/assets/images/backgrounds/layers/far_mountains_large(2).png")
  // montanhaA.setAttribute("class", "cenario__mountain_back")
  // container_montanhas_tras.appendChild(montanhaA)

}

function mostrarPontuacaoFinal() {
  const pontuacaoPartida = document.querySelector(".TelaJogo__gameOver__Score")
  const melhorPontuacaoPartida = document.querySelector(".TelaJogo__gameOver__bestScore")

  pontuacaoPartida.innerHTML = `${pontuacaoAtual}`
  
  if (pontuacaoAtual > localStorage.getItem("pontuacaoAnterior")){
    localStorage.setItem("pontuacaoAnterior", pontuacaoAtual)
  }

  melhorPontuacaoPartida.innerHTML = `${localStorage.getItem("pontuacaoAnterior")}`
  ScoreRankingMedal(pontuacaoAtual)
}