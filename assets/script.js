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

let arrowLeft = document.querySelector(".arrow_left")
let arrowRight = document.querySelector(".arrow_right")
let bannerImg = document.querySelector(".banner-img")
let bannerMove = 0
let bannerText = document.querySelector("#banner p")

let dots = document.querySelector(".dots")
let divDots = document.createElement("div")
let nbrSlides = 0

for (let i = 0; i < slides.length; i++) {
	divDots = document.createElement("div")
	dots.appendChild(divDots)
	divDots.classList.add("dot")
	nbrSlides = i
}

function moveBanner (move) {
	dotSelected.classList.remove("dot_selected")
	dotSelected = document.querySelector(`.dot:nth-child(${move+1})`)
	dotSelected.classList.add("dot_selected")
	bannerImg.src = `./assets/images/slideshow/` + `${slides[move].image}`
	bannerText.innerHTML = `${slides[move].tagLine}`
}

let dotSelected = document.querySelector(".dot")
dotSelected.classList.add("dot_selected")

arrowLeft.addEventListener("click", () => {
	bannerMove--
	if (bannerMove <= -1) {
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
	console.log("test clic droit")
})

arrowRight.addEventListener("contextmenu", (event) => {
	event.preventDefault() // Clic droit désactiver
})

