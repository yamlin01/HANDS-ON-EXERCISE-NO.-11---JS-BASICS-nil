const numberTxt = document.getElementById("number");
const numTxt = document.getElementById("numTxt");
const sumTxt = document.getElementById("sumTxt");
const highestTxt = document.getElementById("highestTxt");
const lowestTxt = document.getElementById("lowestTxt");

let arr = []
let sum = 0;
let highest = 0;
let lowest = 0;


function allNumbers() {
    if(!(numberTxt.value === "")){
        arr.push(parseInt(numberTxt.value));
        highest = numberTxt.value;
        lowest = highest;
        numberTxt.value = "";
    }else{
        alert("You should fill-out all the entries");
    }

    sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    for(let x = 0; x < arr.length; x++){
        if(highest < arr[x]){
            highest = arr[x];
        }
        if(lowest > arr[x]){
            lowest = arr[x];
        }
    }
    numTxt.innerHTML = arr.join("<br>");
    sumTxt.innerHTML = sum;
    highestTxt.innerHTML = highest;
    lowestTxt.innerHTML = lowest;
}

function deleteAll(){
    numTxt.innerHTML = "";
    sumTxt.innerHTML = "";
    highestTxt.innerHTML = "";
    lowestTxt.innerHTML = "";
}