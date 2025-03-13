const ranking_medal = document.querySelector(".score_ranking_medal")

function ScoreRankingMedal(pontuacaoAtual) {
    const medals = {
        "ranks": ["Bronze", "Prata", "Ouro", "Diamante"], 
        "tiers":["1", "2", "3"], 
        "stars":["1", "2", "3"]
    }

    let rank = ""
    let tier = ""

    if (pontuacaoAtual > 11000){

        rank = medals.ranks[3]

        if (pontuacaoAtual >= 12800){
            tier = medals.tiers[2]
            ranking_medal.setAttribute("src", `./src/assets/images/Medals/${rank}-Rank_0 (${tier}).png`)
        }

        else if (pontuacaoAtual >= 11500){
            tier = medals.tiers[1]
            ranking_medal.setAttribute("src", `./src/assets/images/Medals/${rank}-Rank_0 (${tier}).png`)
        }

        else {
            tier = medals.tiers[0]
            ranking_medal.setAttribute("src", `./src/assets/images/Medals/${rank}-Rank_0 (${tier}).png`)
        }
    }

    else if (pontuacaoAtual > 70000){

        rank = medals.ranks[2]

        if (pontuacaoAtual >= 9800){
            tier = medals.tiers[2]
            ranking_medal.setAttribute("src", `./src/assets/images/Medals/${rank}-Rank_0 (${tier}).png`)
        }

        else if (pontuacaoAtual >= 8500){
            tier = medals.tiers[1]
            ranking_medal.setAttribute("src", `./src/assets/images/Medals/${rank}-Rank_0 (${tier}).png`)
        }

        else {
            tier = medals.tiers[0]
            ranking_medal.setAttribute("src", `./src/assets/images/Medals/${rank}-Rank_0 (${tier}).png`)
        }
    }

    else if (pontuacaoAtual > 4000){

        rank = medals.ranks[1]

        if (pontuacaoAtual >= 6800){
            tier = medals.tiers[2]
            ranking_medal.setAttribute("src", `./src/assets/images/Medals/${rank}-Rank_0 (${tier}).png`)
        }

        else if (pontuacaoAtual >= 5500){
            tier = medals.tiers[1]
            ranking_medal.setAttribute("src", `./src/assets/images/Medals/${rank}-Rank_0 (${tier}).png`)
        }

        else {
            tier = medals.tiers[0]
            ranking_medal.setAttribute("src", `./src/assets/images/Medals/${rank}-Rank_0 (${tier}).png`)
        }
    }

    else {

        rank = medals.ranks[0]

        if (pontuacaoAtual >= 3800){
            tier = medals.tiers[2]
            ranking_medal.setAttribute("src", `./src/assets/images/Medals/${rank}-Rank_0 (${tier}).png`)
        }

        else if (pontuacaoAtual >= 2500){
            tier = medals.tiers[1]
            ranking_medal.setAttribute("src", `./src/assets/images/Medals/${rank}-Rank_0 (${tier}).png`)
        }

        else {
            tier = medals.tiers[0]
            ranking_medal.setAttribute("src", `./src/assets/images/Medals/${rank}-Rank_0 (${tier}).png`)
        }
    }
}