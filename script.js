let x;
let y;
let direction = 0; //from the rocket
let speedY = 0;
let speedX = 0;
let counter = 0; //=time not in seconds
let i = 0;
let isWindy = 0; //1=true
let windDirection;
let points = 0;


var config = {
    type: Phaser.AUTO,
    width: 1500,
    height: 1000,
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('rocket','rocket.png'); //rocket
    this.load.image('space','space.png'); //background
    this.load.image('wind','wind.png'); //wind arrow
}

function create ()
{
    this.add.image(500,400,"space");
    this.rocket = this.add.image(400,300,"rocket").setScale(0.4);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.wind = this.add.image(600,-50,"wind").setScale(0.4);
}

function update ()
{

    if (this.cursors.left.isDown)
    {
        direction -= 3;
    }
    if (this.cursors.right.isDown)
    {
        direction += 3;
    }
    if (this.cursors.up.isDown)
    {
        speedY -= Math.cos(toRadians(direction)) * 0.05;
        speedX += Math.sin(toRadians(direction)) * 0.05;
    }

    if (direction < 0) direction = 360 + direction;
    if (direction > 360) direction = direction - 360;
    game.scene.scenes[0].rocket.angle = direction;

    if (counter == 400) {
        windDirection = Phaser.Math.Between(1, 4);
        this.wind.y = 250;
        //if (windDirection == 1)  //links
        console.log(windDirection)
        if (windDirection == 2)  this.wind.angle = 180; //rechts
        if (windDirection == 3) this.wind.angle = 90; //oben
        if (windDirection == 4)  this.wind.angle = 270; //unten
     
        isWindy = 1;
    }
    if (counter == 700) {
        counter = 0;
        isWindy = 0;
        this.wind.y = -50;
        
    }

    if (isWindy == 1) {
        //console.log(speedX);
        if (windDirection == 1) speedX -= 0.03; //links
        if (windDirection == 2) speedX += 0.03; //rechts
        if (windDirection == 3) speedY -= 0.03; //oben
        if (windDirection == 4) speedY += 0.03; //unten
    }
       

    counter ++;

    this.rocket.y = this.rocket.y + speedY;    
    this.rocket.x = this.rocket.x + speedX; 

    points = counter / 70;  //because 700 is to much
}

function toRadians (angle) {
    return angle * (Math.PI / 180);
}
function toAngle (radians) {
    return (radians * 180) / Math.PI;
}

