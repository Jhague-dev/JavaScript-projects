function get_Date() {
    if (new Date().getHours() <18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
     } //this is supposed to be the date/time function, seemingly cannot figure out why "click me" is not working//
}
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >=21) {
        drink = "you are old enough to drink!";
    }
    else {
        drink="you are not old enough to drink";
    }
    document.getElementById("How_old_are_you?").innerHTML = drink;
}//this if else loop handles an age gate for drinking//

var X =10;
function Add_numbers_1() {
    document.write(20 + X +"<br>");
}
function Add_numbers_2() {
    document.write(X+100);
    }
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() {
    var X=10;
    document.write(20+X +"<br>");
}
function Add_numbers_4() {
    console.log(X + 100);
}
Add_numbers_3();
Add_numbers_4(); //Everything between here and the last comment demonstrates...//

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time";
    }
    else if (Time >= 12 == Time <18) {
        Reply = "it is afternoon";
    }
    else {
        Reply = "It is evening";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
//the above demonstrates a time function with if/else/else if//
