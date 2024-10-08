
let baesection = document.getElementById("BAEp")
let enusection = document.getElementById("ENUp")
let arduinosection = document.getElementById("Arduinop")
let emulatesection = document.getElementById("Emulatep")

//Experience Page

function BAEE(){
  baesection.style.display = "flex"
  enusection.style.display = "none"
}
function ENUU(){
  baesection.style.display = "none"
  enusection.style.display = "flex"
}

// Project Page

function Arduino(){
  arduinosection.style.display = "flex"
  emulatesection.style.display = "none"
}
function Emulate(){
  arduinosection.style.display = "none"
  emulatesection.style.display = "flex"
}







