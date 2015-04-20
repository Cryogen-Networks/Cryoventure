debugger;
//Character Constructor
function Character() {
    this.name = input("Choose a name for your character.", "");
    this.inventory = [];
    this.outfit = {
        helm: null,
        body: null,
        legs: null,
        feet: null
    };
    this.action = [];
}
//Variables
var response, out, content, player;
//Input
function input(command, output) {
    //Response
    response = document.getElementById('in');
    if (response.innerHTML == command) {
        show(output);
    } else if (response.innerHTML === isNaN) {
        input(command, output);
    } else {
        show('I don\'t think that\'s a valid command. Try another variant, or another command.');
    }
}
//Visuals
function show(p, intro) {
    out = document.getElementById('out');
    content = "<p>" + p + "</p>";
    if (intro) {
        out.innerHTML = content;
    } else {
        out.insertAdjacentHTML('beforeend', content);
    }
}
//Game instantiation
function init() {
    player = new Character();
    show("Welcome to Cryogen, " + player.name + "!\nYou are now starting on your adventure..");
    show("--------------------------------------------------");
    show("You wake to the sound of horses neighing.. and blurred vison.\n[Shake your head!]");
    input('shake head', 'You shake your head, and your vision clears.\n');
}
//Starting..
init();
