// import main scss file
import "./src/scss/main.scss"

const smallCups = document.querySelectorAll(".cup-small")
const liters = document.querySelector("#liters")
const percentage = document.querySelector("#percentage")
const remained = document.querySelector("#remained")

updateBigCups()

smallCups.forEach((cup, cupIndex) => {
	cup.addEventListener("click", () => highlightCup(cupIndex))
})

function highlightCup(idx) {
	if (
		smallCups[idx].classList.contains("full") &&
		!smallCups[idx].nextElementSibling.classList.contains("full")
	) {
		idx--
	}

	smallCups.forEach((cup, cupIndex) => {
		if (cupIndex <= idx) {
			// cup.classList.add("full")
			console.log(`
            Add Case - 
            child index: ${cupIndex}
            parent index: ${idx}
            `)
			cup.classList.add("full")
		} else {
			cup.classList.remove("full")
			console.log(`
            Remove Case -
            child index: ${cupIndex}
            parent index: ${idx}
           `)
		}
	})

	updateBigCups()
}

function updateBigCups() {
	const totalCups = smallCups.length
	const fullCups = document.querySelectorAll(".cup-small.full").length

	if (fullCups !== 0) {
		percentage.style.visibility = "visible"
		percentage.style.height = `${(fullCups / totalCups) * 320}px`
		percentage.innerText = `${(fullCups / totalCups) * 100} %`
	} else {
		percentage.style.visibility = "hidden"
		percentage.style.height = 0
	}

	if (fullCups !== totalCups) {
		remained.style.visibility = "visible"
		liters.innerText = `${2 - (250 * fullCups) / 1000}`
	} else {
		remained.style.visibility = "hidden"
		remained.style.height = 0
	}
}
