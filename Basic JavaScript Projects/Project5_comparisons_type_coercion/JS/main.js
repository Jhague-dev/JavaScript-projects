document.write("23"+5) ;
document.write(typeof "albatross") ;
document.write(5E700) ;
document.write(-5E700) ;
document.write(10>2) ;
document.write(10<2) ;
console.log(2*2) ;
console.log(10<2) ;
document.write(10==10) ;
document.write(2==3) ;
//this is the initial block of console writes//


function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;   
}


function second_Function() {
    document.getElementById("string").innerHTML = isNaN('This is a string');
}


function third_Function() {
    document.getElementById("thing").innerHTML =isNaN('007');
} //The above three functions deal with NaN//

x = 10;
y = 10;
document.write(x===y);

x=2;
y="blue";
document.write(x===y);

x=4;
y="4";
document.write(x===y);

x=5;
y=7;
document.write(x===y);
//The above variables and document.writes demonstrate equality comparisons//

document.write(10>3 && 2<3);
document.write(10<3 && 2>3);

document.write(5>2 || 1<5);
document.write(5<2 || 1>5);
//These demonstrate "and" and "or" operators//

function not_Function() {
    document.getElementById("Not").innerHTML = ! (20>10);
    
}

function not_Function2() {
    document.getElementById("true").innerHTML = ! (20<10);
}
//Both of the above demonstrate the not function//
