

//Experience Page
let baesection = document.getElementById("BAEp")
let enusection = document.getElementById("ENUp")

let cadetsubbutton = document.getElementById("cadet")
let displayc = 0

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
let displaya = 0
// End of Arduino Section 
let emulatesection = document.getElementById("emulationp")


function Website(){
  websitesection.style.display = "flex"
  arduinostartsection.style.display = "none"
  sevensegmentsection.style.display = "none"
  emulatesection.style.display = "none"
}
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
  emulatesection.style.display = "none"
}
function SevenSegment(){
  websitesection.style.display = "none"
  arduinostartsection.style.display = "none"
  sevensegmentsection.style.display = "flex"
  emulatesection.style.display = "none"
}
function Emulate(){
  websitesection.style.display = "none"
  arduinostartsection.style.display = "none"
  sevensegmentsection.style.display = "none"
  emulatesection.style.display = "flex"
}









