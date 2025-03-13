const telaJogo = document.getElementById("TelaJogo")
const botaoReiniciar = document.querySelector(".btn__retry")
const botaoMusica = document.querySelector(".btn__music")

const levelMusic = new Audio("./src/assets/sounds/DavidKBD - 07 - Dancing Under the Palm Trees - Skank the Summer.ogg")

const path_buttons = "src/assets/images/ui-game/Buttons"
const path_buttons_music = "src/assets/images/music controler"

botaoReiniciar.addEventListener("click", ()=>{
    location.reload()
})

telaJogo.addEventListener("mousemove", (event)=>{
    const btnSelecionado = event.target.classList

    const botoes = {btn_voltar: ["btn__back" , "back"], btn_reiniciar: ["btn__retry", "retry"]}

    let botaoSelectClass = ''
    let botaoSelectImg = ''

    if (btnSelecionado.contains("btn__back")){
        botaoSelectClass = document.querySelector(`.${botoes.btn_voltar[0]}`)
        botaoSelectImg = botoes.btn_voltar[1]
    }

    else if (btnSelecionado.contains("btn__retry")) {
        botaoSelectClass = document.querySelector(`.${botoes.btn_reiniciar[0]}`)
        botaoSelectImg = botoes.btn_reiniciar[1]
    }

    if (botaoSelectClass != '' && botaoSelectImg != ''){

        console.log(botaoSelectImg)

        botaoSelectClass.addEventListener("mousemove", ()=>{
            botaoSelectClass.setAttribute("src", `${path_buttons}/${botaoSelectImg}_hover.png`)
        })
        
        botaoSelectClass.addEventListener("mouseout", ()=>{
            botaoSelectClass.setAttribute("src", `${path_buttons}/${botaoSelectImg}_default.png`)
        })

        botaoSelectClass.addEventListener("mousedown", ()=>{
            botaoSelectClass.setAttribute("src", `${path_buttons}/${botaoSelectImg}_activated.png`)
        })

        botaoSelectClass.addEventListener("mouseup", ()=>{
            botaoSelectClass.setAttribute("src", `${path_buttons}/${botaoSelectImg}_hover.png`)
        })
        
    }
})

botaoMusica.addEventListener("mousemove", ()=>{
    if (botaoMusica.classList.contains("playMusic")){
        botaoMusica.setAttribute("src", `${path_buttons_music}/music_hover.png`)
    }
    else if (botaoMusica.classList.contains("muteMusic")){
        botaoMusica.setAttribute("src", `${path_buttons_music}/mute_music_hover.png`)
    }
})

botaoMusica.addEventListener("mouseout", ()=>{

    if (botaoMusica.classList.contains("playMusic")){
        botaoMusica.setAttribute("src", `${path_buttons_music}/music_default.png`)
    }
    else if (botaoMusica.classList.contains("muteMusic")){
        botaoMusica.setAttribute("src", `${path_buttons_music}/mute_music_default.png`)
    }
})

botaoMusica.addEventListener("mousedown", ()=>{
    
    botaoMusica.classList.toggle("muteMusic")
    botaoMusica.classList.toggle("playMusic")

    if (botaoMusica.classList.contains("playMusic")){
        botaoMusica.setAttribute("src", `${path_buttons_music}/music_activated.png`)

        levelMusic.play()
        levelMusic.loop = true
        levelMusic.volume = 0.2

    }
    else if (botaoMusica.classList.contains("muteMusic")){
        botaoMusica.setAttribute("src", `${path_buttons_music}/mute_music_activated.png`)

        levelMusic.volume = 0
    }

})

botaoMusica.addEventListener("mouseup", ()=>{

    if (botaoMusica.classList.contains("playMusic")){
        botaoMusica.setAttribute("src", `${path_buttons_music}/music_hover.png`)
    }
    else if (botaoMusica.classList.contains("muteMusic")){
        botaoMusica.setAttribute("src", `${path_buttons_music}/mute_music_hover.png`)
    }

})