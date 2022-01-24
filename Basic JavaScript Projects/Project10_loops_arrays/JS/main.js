function count_to_ten() {
    var Digit ="";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_ten").innerHTML = Digit;
} //this is a while loop//

var Instruments=["Guitar", "Drums", "Piano", "Bass", "Violin", "Tumpet", "Flute"];
var Content ="";
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
} //this demonstrates for loop//

function cat_pics() {
    var Cat_Picture =[];
    Cat_Picture[0]= "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this Picture, the cat is " +
        Cat_Picture[2] + "."; //this handles an array function//
}

function constant_function() {
    const Musical_Instrument = {type: "guitar", brand: "Fender", color: "black"};
    Musical_Instrument.color = "green";
    Musical_Instrument.price= "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.color +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}//this is a constant function//

var X = 82;
document.write(X);
{
    var X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

let car = {
    make:"dodge",
    model:"viper",
    year: "2021",
    color: "red",
    description : function() {
        return "the car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();
//the above demostrates objects//