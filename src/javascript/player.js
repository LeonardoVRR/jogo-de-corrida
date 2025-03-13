const player = document.querySelector(".TelaJogo__player")
const playerSprite = document.getElementById("player_sprite")
const playerColisao = document.querySelector(".colisao_player")

const telaGameOverStatus = document.querySelector(".TelaJogo__gameOver")

document.addEventListener("keyup", Jump)

const playerAction = {
    jump: "src/assets/images/player-character/Mega-Man/jump.gif",
    run: "src/assets/images/player-character/Mega-Man/run.gif"
}


document.onkeydown = function (e) {

    if (e.key === "F5" && (e.ctrlKey || e.shiftKey) || e.key === "F5") {
        e.preventDefault(); // Impede o recarregamento da página
    }

};


function Jump(event){
    const tecla = event.keyCode;

    //console.log(tecla)

    if (tecla === 38){

        let game_over = telaGameOverStatus.getAttribute("style") == "display: none;" ? false : true

        console.log(telaGameOverStatus.getAttribute("style"))
        console.log(game_over)
        
        if (!game_over){

            game_over = telaGameOverStatus.getAttribute("style") == "display: none;" ? false : true
            
            player.classList.add('player_jump')
            playerColisao.classList.add('player_jump')
    
            let num = Math.floor(Math.random() * 4) + 1;
            playerSprite.setAttribute('src', `${playerAction.jump}`)

            player.addEventListener('animationend', ()=>{

                game_over = telaGameOverStatus.getAttribute("style") == "display: none;" ? false : true

                player.classList.remove('player_jump')
                playerColisao.classList.remove('player_jump')

                if (!game_over){

                    playerSprite.setAttribute('src', `${playerAction.run}`)
                    console.log(`Game Over False: ${game_over}`)

                }

                // else {
                //     console.log(`Game Over True: ${game_over}`)
                //     playerSprite.setAttribute('src', './src/assets/images/player-character/Mega-Man/death.gif')
                // }
                
            })

        }
        
    }
    
}