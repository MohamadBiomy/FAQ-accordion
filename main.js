// let btn = document.querySelector("button")
let imgs = document.querySelectorAll(".question img")
let answers = document.querySelectorAll(".answer")




answers.forEach((v, i) => {
  if (imgs[i].getAttribute("src") === "images/icon-plus.svg") {
    v.classList.add("none")
  } else {
    v.classList.remove("none")
  }
})


function changeImg(event, image, paraToHide) {

  if (image.getAttribute("src") === "images/icon-plus.svg") {
    image.setAttribute("src", "images/icon-minus.svg")
    paraToHide.classList.remove("none")
  } else {
    image.setAttribute("src", "images/icon-plus.svg")
    paraToHide.classList.add("none")
  }

  event.preventDefault()

}

imgs.forEach((v, i) => v.addEventListener("click", (e) => changeImg(e, v, answers[i])))

