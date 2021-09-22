//Track changes for color input 1
document.getElementById('picker-1').oninput = function() {
    changeColors()
}
//Track changes for color input 2
document.getElementById('picker-2').oninput = function() {
    changeColors()
}
//Get value for split when the slider changes
document.getElementById('split').oninput = function() {
    changeColors();
}

//Get values for color inputs 1,2 and slider and apply to linear gradient
function changeColors() {
    let inputColor1 = document.getElementById('picker-1').value 
    let inputColor2 = document.getElementById('picker-2').value
    let sliderVal = document.getElementById('split').value
    document.getElementById('gradient').style.background = `linear-gradient(${inputColor1} ${sliderVal}%, ${inputColor2}`
  }



  function randomGradient() {
    let [inputColorX, inputColorY, inputColorZ] = [Math.floor(Math.random() * 226), Math.floor(Math.random() * 226), Math.floor(Math.random() * 226)]
    let inputColor1 = document.getElementById('picker-1').innerHTML
    inputColor1 = `rgb(${inputColorX}, ${inputColorY}, ${inputColorZ})`
    
    let [inputColorA, inputColorB, inputColorC] = [Math.floor(Math.random() * 226), Math.floor(Math.random() * 226), Math.floor(Math.random() * 226)]
    let inputColor2 = document.getElementById('picker-2').value
    inputColor2 = `rgb(${inputColorA}, ${inputColorB}, ${inputColorC})`
    
    //Right now works if you adjust before clicking "Surprise Me" but not after because inputs are not actually changed
    let sliderVal = document.getElementById('split').value


    console.log(inputColor1, inputColor2)
    document.getElementById('gradient').style.background = `linear-gradient(${inputColor1} ${sliderVal}%, ${inputColor2})`
  }






