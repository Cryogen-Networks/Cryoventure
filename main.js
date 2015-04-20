//Character Constructor
function Character() {
    this.name = prompt("Choose a name for your character.");
    this.inventory = [];
    this.outfit = {
        helm: null,
        body: null,
        legs: null,
        feet: null
    };
    this.action = [];
}
//Visuals
function show(p) {
    var container = document.getElementById('container'), content ="<p>" + p + "</p>";
    container.insertAdjacentHTML('beforeend', content);
}
//Game instantiation
function init() {
    var player = new Character();
    show("Welcome to Cryogen, " + player.name + "!\nYou are now starting on your adventure..");
    show("----------------------------------------");
    show("You wake to the sound of horses neighing.. and blurred vison.\n[Shake your head!]");
}
init();
