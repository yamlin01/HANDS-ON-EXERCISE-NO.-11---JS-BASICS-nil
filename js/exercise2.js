const firstnameTxt = document.getElementById("firstname");
const middlenameTxt = document.getElementById("middlename");
const lastnameTxt = document.getElementById("lastname");
const generateTxt = document.getElementById("generateTxt");

function generateFullname() {
    if(firstnameTxt.value == "" || middlenameTxt.value == "" || lastnameTxt.value == ""){
        alert("You should fill-out all the entries");
    }else{
        generateTxt.innerHTML = firstnameTxt.value + " " + middlenameTxt.value + " " + lastnameTxt.value;
    }
}

function clearFullname(){
    firstnameTxt.value = "";
    middlenameTxt.value = "";
    lastnameTxt.value = "";
    generateTxt.innerHTML = "";
}