var database;
var game,form,player;
function setup(){
    createCanvas(400,400);
    database=firebase.database();
    game=new Game();
    game.start();
}

function draw(){
}

