//Track changes for color input 1
document.getElementById('picker-1').oninput = function() {
    changeColors();
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


//Generate random hexadecimal values then set them to "values" attributes of pickers
  function randomGradient() {
    let inputColorX = Math.floor(Math.random() * 16777215).toString(16)
    let inputColor1 = document.getElementById('picker-1')
    inputColor1.setAttribute('value', `#${inputColorX}`)
    
    let inputColorY = Math.floor(Math.random() * 16777215).toString(16)
    let inputColor2 = document.getElementById('picker-2')
    inputColor2.setAttribute('value', `#${inputColorY}`)
    
    let sliderVal = document.getElementById('split').value

    document.getElementById('gradient').style.background = `linear-gradient(#${inputColorX} ${sliderVal}%, #${inputColorY})`
  }






