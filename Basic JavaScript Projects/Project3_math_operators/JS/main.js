function addition_Function() {
    var addition = 2+2;
    document.getElementById("math").innerHTML = "2+2 = " + addition;
} //this function handles addition//

function subtraction_Function() {
    var subtraction = 5-2;
    document.getElementById("math").innerHTML = "5 - 2 = " + subtraction;
} //This function handles subtraction//

function multiplication() {
    var simple_math = 6*8;
    document.getElementById("math").innerHTML = "6 x 8 = " + simple_math;
} //function for multiplication//

function division() {
    var simple_math = 48/6;
    document.getElementById("math").innerHTML = "48/6 = " + simple_math;
} //and division//

function more_math() {
    var simple_math = (1+2) * 10 / 2-5;
    document.getElementById("math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_math;
} //this is multiple math steps//

function modulus_operator() {
    var simple_math = 25 % 6;
    document.getElementById("math").innerHTML = "Wehn you divide 25 by 6 you have a remainder of: " + simple_math;
} //this function handles the modulus operator//

function negation_operator() {
    var x = 10;
    document.getElementById("math").innerHTML = -x;
} //finally, a negation operator//


 var x = 5;
 x++;
document.write(x);
    // this is an increment function//

function decrement_operator() {
    var y = 5.25;
    y--;
    document.write(y);
} //decrement operator//

window.alert(Math.random()); //a window alert displaying a math random fucntion//

function random_math() {
     Math.round(9.6);
    document.getElementById("math").innerHTML = Math.round(9.6);

}
//finally, this one displays a rounding function//