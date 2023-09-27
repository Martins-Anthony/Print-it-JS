const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")
const bannerImg = document.querySelector(".banner-img")
const bannerText = document.querySelector("#banner p")
const dots = document.querySelector(".dots")
let divDots = document.createElement("div")
let nbrSlides = slides.length -1
let bannerMove = 0

for (let i = 0; i < slides.length; i++) {
	divDots = document.createElement("div")
	dots.appendChild(divDots)
	divDots.classList.add("dot")
}

let dotSelected = document.querySelector(".dot")
dotSelected.classList.add("dot_selected")

function moveBanner (move) {
	dotSelected.classList.remove("dot_selected")
	dotSelected = document.querySelector(`.dot:nth-child(${move+1})`)
	dotSelected.classList.add("dot_selected")
	bannerImg.src = `./assets/images/slideshow/` + `${slides[move].image}`
	bannerText.innerHTML = `${slides[move].tagLine}`
}

arrowLeft.addEventListener("click", () => {
	bannerMove--
	if (bannerMove === -1) {
		bannerMove = nbrSlides
	}
	moveBanner(bannerMove)
	console.log("test clic gauche")
})

arrowLeft.addEventListener("contextmenu", (event) => {
	event.preventDefault() // Clic droit désactiver
})

arrowRight.addEventListener("click", () => {
	bannerMove++
	if (bannerMove > nbrSlides) {
		bannerMove = 0
	}
	moveBanner(bannerMove)
	console.log("test clic gauche")
})

arrowRight.addEventListener("contextmenu", (event) => {
	event.preventDefault() // Clic droit désactiver
})