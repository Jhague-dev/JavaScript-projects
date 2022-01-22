function full_sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "inta a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}//this demonstrates concat method//

function slice_Method() {
    var sentence = "All work and no play makes johnny a dull boy";
    var section = sentence.slice(27,33);
    document.getElementById("slice").innerHTML = section;
}//this demostrates slice method//

function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}//this is to string//

function precision_Method() {
    var X = 12938.3012987976112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}//this is toprecision//