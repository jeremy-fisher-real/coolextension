const sliderbox = document.getElementById(`box`)
const redSlider = document.getElementById(`redSlider`)
const greenSlider = document.getElementById(`greenSlider`)
const blueSlider = document.getElementById(`blueSlider`)
const redInput = document.getElementById(`redInput`)
const greenInput = document.getElementById(`greenInput`)
const blueInput = document.getElementById(`blueInput`)

function changeColour() {
    sliderbox.style.backgroundColor = `rgb(`+redSlider.value+`, `+greenSlider.value+`, `+blueSlider.value+`)`
}

function update() {
	redInput.value = redSlider.value
	greenInput.value = greenSlider.value
	blueInput.value = blueSlider.value
	
	changeColour()
}

redSlider.addEventListener("change", update)
greenSlider.addEventListener("change", update)
blueSlider.addEventListener("change", update)