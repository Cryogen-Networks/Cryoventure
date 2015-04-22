// Character Constructor
function Character() {
    this.name = input("Choose a name for your character.", "", true);
    this.inventory = [];
    this.outfit = {
        helm: null,
        body: null,
        legs: null,
        feet: null
    };
    this.action = [];
}
// Recieving Input
function input(command, output, intro) {
    // Responding
    var response = document.getElementById('in');
    if (intro) {
        show(command);
        Character.name = response.value;
    }
    if (response.value == command) {
        show(output);
    } else if (response.value === isNaN) {
        input(command, output);
    } else {
        show('I don\'t think that\'s a valid command. Try another variant, or another command.');
    }
}
// Visuals
function show(p, intro) {
    var out = document.getElementById('out');
    var content = "<p>" + p + "</p>";
    if (intro) {
        out.innerHTML = content;
    } else {
        out.insertAdjacentHTML('beforeend', content);
    }
}
// Game instantiation
function init() {
    var player = new Character();
    show("Welcome to Cryogen, " + player.name + "!\nYou are now starting on your adventure..");
    show("--------------------------------------------------");
    show("You wake to the sound of horses neighing.. and blurred vison.\n[Shake your head!]");
    input('shake head', 'You shake your head, and your vision clears.\n');
}
