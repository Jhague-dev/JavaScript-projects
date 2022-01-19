function my_dictionary() {
    var adventurer ={
        race: "elf",
        class: "spellsword",
        alignment: "neutral",
    };
    delete adventurer.race;
    document.getElementById("Dictionary").innerHTML = adventurer.race;
}