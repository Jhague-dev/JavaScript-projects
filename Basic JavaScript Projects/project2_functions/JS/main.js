function My_First_Function() {
    var str = "first";
    document.getElementById("Button_Text").innerHTML = str;
//this first function sets up the first button on the page//
}

function My_Second_Function() {
    var str = "second";
    document.getElementById("Button_Text").innerHTML = str;
    //this does the same as the above function, just for a second button//
}

function myFunction() {
    var sentence ="This sentence is";
    sentence += "being concatenated";
    document.getElementById("concatenate").innerHTML = sentence;
    //this functions sole purpose is to demonstrate a concatenated string using the += operator.//
}

function anotherFunction() {
    var number = 30;
    number += 15;
    document.getElementById("number").innerHTML = number;
}

