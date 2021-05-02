

const getDistrict = document.getElementById("district")
const getCollection = document.getElementById("collection")
const getDisplayCod = document.getElementById("displayCod")
const getDisplayTotal = document.getElementById("displayTotal")
const getDisplayCharge = document.getElementById("displayCharge")

let cod = 1;
let districtCharge;
let collectAmount;
let displayCOD;

getDistrict.addEventListener("input", (e) =>{
    districtCharge=Number(e.target.value)
})

getCollection.addEventListener("input",(e) =>{
    collectAmount=Number(e.target.value)
    displayCOD=collectAmount * (cod/100)
    getDisplayCod.innerHTML=displayCOD.toFixed(2)
    getDisplayCharge.innerHTML=districtCharge
    getDisplayTotal.innerHTML=(displayCOD+districtCharge).toFixed(2)
})

