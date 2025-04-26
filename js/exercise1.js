const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const sumTxt = document.getElementById("sumTxt");
const diffTxt = document.getElementById("diffTxt");
const prodTxt = document.getElementById("prodTxt");
const quoTxt = document.getElementById("quoTxt");

let sum = 0;

function calculate(){
    if(num1Txt.value == "" || num2Txt.value == ""){
        alert("You should fill-out all the entries");
    }else{
        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        sumTxt.innerHTML = sum

        sum = parseInt(num1Txt.value) - parseInt(num2Txt.value);
        diffTxt.innerHTML = sum

        sum = parseInt(num1Txt.value) * parseInt(num2Txt.value);
        prodTxt.innerHTML = sum

        sum = parseInt(num1Txt.value) / parseInt(num2Txt.value);
        quoTxt.innerHTML = sum
    }
}


function clearEnt(){
    num1Txt.value = "";
    num2Txt.value = "";
    sumTxt.innerHTML = "";
    diffTxt.innerHTML = "";
    prodTxt.innerHTML = "";
    quoTxt.innerHTML = "";
}