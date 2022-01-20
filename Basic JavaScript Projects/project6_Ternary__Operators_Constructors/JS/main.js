function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride=(Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride +  " to ride.";
} //The name explains this function//

function Vote_Function() {
    var age, Can_vote;
    age = document.getElementById("age").value;
    Can_vote =(age<18) ? "You are too young":"you are old enough";
    document.getElementById("vote").innerHTML = Can_vote + " to vote";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color; //this function sets up the the below getElement//
}
var Jack = new Vehicle("Dodge", "viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("keywords_and_constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
} //the vars here are used for myFunction//

x = "true";
document.write(x);

function count_Function() {
    document.getElementById("Counting").innerHTML = Count ();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    } //this is the nested function//
}