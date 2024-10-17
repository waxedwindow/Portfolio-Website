

//Experience Page
let baesection = document.getElementById("BAEp")
let enusection = document.getElementById("ENUp")

let cadetsubbutton = document.getElementById("cadet")
let displayc = 1

function BAEE(){
  baesection.style.display = "flex"
  enusection.style.display = "none"
}
function ENUU(){
  baesection.style.display = "none"
  enusection.style.display = "flex"
}
function Cadet(){
  if (displayc == 1)
  {cadetsubbutton.style.display = "flex"
    displayc = 0
  }
  else{
    cadetsubbutton.style.display =  "none"
    displayc = 1
  }

}


// Project Page
let websitesection = document.getElementById("Websitep")

// Arduino Section 
let arduinosubbutton = document.getElementById("arduinos")
let arduinostartsection  = document.getElementById("ArduinoStart")
let sevensegmentsection = document.getElementById("sevensegmentp")

let fourdigitsevensegmentsection = document.getElementById("fourdigitsevensegmentp")
let foursevencodesection = document.getElementById("foursevencodep")

let fakebombsection = document.getElementById("fakebombp")
let fakebombcodesection = document.getElementById("fakebombcodep")

let displaya = 1
// End of Arduino Section 

let emulatesection = document.getElementById("emulationp")


function Website(){
  websitesection.style.display = "flex"
  arduinostartsection.style.display = "none"
  sevensegmentsection.style.display = "none"
  fourdigitsevensegmentsection.style.display = "none"
  foursevencodesection.style.display = "none"
  fakebombsection.style.display = "none"
  fakebombcodesection.style.display = "none"
  emulatesection.style.display = "none"
}

// Arduino 

function Arduino(){
  if (displaya == 1)
    {arduinosubbutton.style.display = "flex"
      displaya = 0
    }
    else{
      arduinosubbutton.style.display =  "none"
      displaya = 1
    }
}
function ArduinoBeginning(){
  websitesection.style.display = "none"
  arduinostartsection.style.display = "flex"
  sevensegmentsection.style.display = "none"
  fourdigitsevensegmentsection.style.display = "none"
  foursevencodesection.style.display = "none"
  fakebombsection.style.display = "none"
  fakebombcodesection.style.display = "none"
  emulatesection.style.display = "none"
}
function SevenSegment(){
  websitesection.style.display = "none"
  arduinostartsection.style.display = "none"
  sevensegmentsection.style.display = "flex"
  fourdigitsevensegmentsection.style.display = "none"
  foursevencodesection.style.display = "none"
  fakebombsection.style.display = "none"
  fakebombcodesection.style.display = "none"
  emulatesection.style.display = "none"
}
function FourSevenSegment(){
  websitesection.style.display = "none"
  arduinostartsection.style.display = "none"
  sevensegmentsection.style.display = "none"
  fourdigitsevensegmentsection.style.display = "flex"
  foursevencodesection.style.display = "none"
  fakebombsection.style.display = "none"
  fakebombcodesection.style.display = "none"
  emulatesection.style.display = "none"
}
function FourSevenCode(){
  websitesection.style.display = "none"
  arduinostartsection.style.display = "none"
  sevensegmentsection.style.display = "none"
  fourdigitsevensegmentsection.style.display = "none"
  foursevencodesection.style.display = "flex"
  fakebombsection.style.display = "none"
  fakebombcodesection.style.display = "none"
  emulatesection.style.display = "none"
}
function FakeBomb(){
  websitesection.style.display = "none"
  arduinostartsection.style.display = "none"
  sevensegmentsection.style.display = "none"
  fourdigitsevensegmentsection.style.display = "none"
  foursevencodesection.style.display = "none"
  fakebombsection.style.display = "flex"
  fakebombcodesection.style.display = "none"
  emulatesection.style.display = "none"
}
function FakeBombCode(){
  websitesection.style.display = "none"
  arduinostartsection.style.display = "none"
  sevensegmentsection.style.display = "none"
  fourdigitsevensegmentsection.style.display = "none"
  foursevencodesection.style.display = "none"
  fakebombsection.style.display = "none"
  fakebombcodesection.style.display = "flex"
  emulatesection.style.display = "none" 
}
// End of Arduino 
function Emulate(){
  websitesection.style.display = "none"
  arduinostartsection.style.display = "none"
  sevensegmentsection.style.display = "none"
  fourdigitsevensegmentsection.style.display = "none"
  foursevencodesection.style.display = "none"
  fakebombsection.style.display = "none"
  fakebombcodesection.style.display = "none"
  emulatesection.style.display = "flex"
}









