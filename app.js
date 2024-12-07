

//Experience Page
let baesection = document.getElementById("BAEp")
let enusection = document.getElementById("ENUp")

  // Cadet Section 
let cadetsubbutton = document.getElementById("cadet")
let displayc = 1
let firstaidsection = document.getElementById("CadetFirstAidp")
let promotionsection = document.getElementById("CadetPromotionp")
let shootingsection = document.getElementById("CadetShootingp")
let rememberanceday = document.getElementById("CadetRememberancep")
let shopkeeping = document.getElementById("CadetShopkeepingp")
  // End of Cadet Section 

  // Dofe Section 
let dofesubbutton = document.getElementById("dofe")
let displayd = 1
  // Dofe Section 

function BAEE(){
  baesection.style.display = "flex"
  enusection.style.display = "none"
  firstaidsection.style.display = "none"
  promotionsection.style.display = "none"
  shootingsection.style.display = "none"
  rememberanceday.style.display = "none"
  shopkeeping.style.display = "none"
}
function ENUU(){
  baesection.style.display = "none"
  enusection.style.display = "flex"
  firstaidsection.style.display = "none"
  promotionsection.style.display = "none"
  shootingsection.style.display = "none"
  rememberanceday.style.display = "none"
  shopkeeping.style.display = "none"
}

// Cadet 
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
function CadetFirstAid(){
  baesection.style.display = "none"
  enusection.style.display = "none"
  firstaidsection.style.display = "flex"
  promotionsection.style.display = "none"
  shootingsection.style.display = "none"
  rememberanceday.style.display = "none"
  shopkeeping.style.display = "none"
}
function CadetPromotion(){
  baesection.style.display = "none"
  enusection.style.display = "none"
  firstaidsection.style.display = "none"
  promotionsection.style.display = "flex"
  shootingsection.style.display = "none"
  rememberanceday.style.display = "none"
  shopkeeping.style.display = "none"
}
function CadetShooting(){
  baesection.style.display = "none"
  enusection.style.display = "none"
  firstaidsection.style.display = "none"
  promotionsection.style.display = "none"
  shootingsection.style.display = "flex"
  rememberanceday.style.display = "none"
  shopkeeping.style.display = "none"
}
function CadetRememberance(){
  baesection.style.display = "none"
  enusection.style.display = "none"
  firstaidsection.style.display = "none"
  promotionsection.style.display = "none"
  shootingsection.style.display = "none"
  rememberanceday.style.display = "flex"
  shopkeeping.style.display = "none"
}
function CadetShopkeeping(){
  baesection.style.display = "none"
  enusection.style.display = "none"
  firstaidsection.style.display = "none"
  promotionsection.style.display = "none"
  shootingsection.style.display = "none"
  rememberanceday.style.display = "none"
  shopkeeping.style.display = "flex"
}
// End of Cadet 

function DofE(){
  if (displayd == 1)
  {dofesubbutton.style.display = "flex"
    displayd = 0
  }
  else{
    dofesubbutton.style.display =  "none"
    displayd = 1
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
let personal3DSsection = document.getElementById("personal3dsp")
let computersection = document.getElementById("computerbuildingp")
let upcomingideasection = document.getElementById("upcomingideap")


function Website(){
  websitesection.style.display = "flex"
  arduinostartsection.style.display = "none"
  sevensegmentsection.style.display = "none"
  fourdigitsevensegmentsection.style.display = "none"
  foursevencodesection.style.display = "none"
  fakebombsection.style.display = "none"
  fakebombcodesection.style.display = "none"
  emulatesection.style.display = "none"
  personal3DSsection.style.display  = "none"
  computersection.style.display = "none"
  upcomingideasection.style.display = "none"
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
  personal3DSsection.style.display  = "none"
  computersection.style.display = "none"
  upcomingideasection.style.display = "none"
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
  personal3DSsection.style.display  = "none"
  computersection.style.display = "none"
  upcomingideasection.style.display = "none"
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
  personal3DSsection.style.display  = "none"
  computersection.style.display = "none"
  upcomingideasection.style.display = "none"
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
  personal3DSsection.style.display  = "none"
  computersection.style.display = "none"
  upcomingideasection.style.display = "none"
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
  personal3DSsection.style.display  = "none"
  computersection.style.display = "none"
  upcomingideasection.style.display = "none"
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
  personal3DSsection.style.display  = "none"
  computersection.style.display = "none"
  upcomingideasection.style.display = "none"
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
  personal3DSsection.style.display  = "none"
  computersection.style.display = "none"
  upcomingideasection.style.display = "none"
}
function Personal3DS(){
  websitesection.style.display = "none"
  arduinostartsection.style.display = "none"
  sevensegmentsection.style.display = "none"
  fourdigitsevensegmentsection.style.display = "none"
  foursevencodesection.style.display = "none"
  fakebombsection.style.display = "none"
  fakebombcodesection.style.display = "none"
  emulatesection.style.display = "none"
  personal3DSsection.style.display  = "flex"
  computersection.style.display = "none"
  upcomingideasection.style.display = "none"  
}
function ComputerBuild(){
  websitesection.style.display = "none"
  arduinostartsection.style.display = "none"
  sevensegmentsection.style.display = "none"
  fourdigitsevensegmentsection.style.display = "none"
  foursevencodesection.style.display = "none"
  fakebombsection.style.display = "none"
  fakebombcodesection.style.display = "none"
  emulatesection.style.display = "none"
  personal3DSsection.style.display  = "none"
  computersection.style.display = "flex"
  upcomingideasection.style.display = "none"
}
function UpcomingIdea(){
  websitesection.style.display = "none"
  arduinostartsection.style.display = "none"
  sevensegmentsection.style.display = "none"
  fourdigitsevensegmentsection.style.display = "none"
  foursevencodesection.style.display = "none"
  fakebombsection.style.display = "none"
  fakebombcodesection.style.display = "none"
  emulatesection.style.display = "none"
  personal3DSsection.style.display  = "none"
  computersection.style.display = "none"
  upcomingideasection.style.display = "flex"  
}








