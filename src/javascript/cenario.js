const mountain_back_container__items = document.querySelectorAll(".mountain_back_container__item")
const mountain_front_container__items = document.querySelectorAll(".mountain_container__item")
const clouds_container__items = document.querySelectorAll(".clouds_container__item")

let mountain_back_delay = 0
let mountain_front_delay = 0
let clouds_delay = 0

let startPosition_mountain_back = 55
let finalPosition_mountain_back = 100

let startPosition_mountain_front = 100
let finalPosition_mountain_front = 300

let startPosition_clouds = 65
let finalPosition_clouds = 110

mountain_back_container__items.forEach(item => {

    item.setAttribute("style", `--startPosition: ${startPosition_mountain_back}%; --finalPosition: ${finalPosition_mountain_back}%;`)

    startPosition_mountain_back -= 45
    finalPosition_mountain_back -= 45

    // item.style.cssText = `animation-delay: ${mountain_back_delay}s;`
    // mountain_back_delay += 4

})

mountain_front_container__items.forEach(item => {

    const gap = 50

    item.setAttribute("style", `--startPosition: ${startPosition_mountain_front}%; --finalPosition: ${finalPosition_mountain_front}%;`)

    startPosition_mountain_front -= gap
    finalPosition_mountain_front -= gap

    // item.style.cssText = `animation-delay: ${mountain_front_delay}s;`
    // mountain_front_delay += 4.54

})

clouds_container__items.forEach(item => {

    item.setAttribute("style", `--startPosition: ${startPosition_clouds}%; --finalPosition: ${finalPosition_clouds}%;`)
    
    startPosition_clouds -= 45
    finalPosition_clouds -= 45

});