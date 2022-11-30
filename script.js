let x;
let y;
let direction = 0; //from the rocket
let speedY = 0;
let speedX = 0;
let counter = 0;
let i = 0;
let isWindy = 0;
let windDirection;


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
    this.load.image('rocket','rocket.png');
    this.load.image('space','space.png');
    this.load.image('wind','wind.png');
}

function create ()
{
    this.add.image(500,400,"space");
    this.rocket = this.add.image(400,300,"rocket").setScale(0.4);
    this.cursors = this.input.keyboard.createCursorKeys();
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

    if (counter == 700) {
        windDirection = Phaser.Math.Between(1, 4);

        if (windDirection == 1) this.wind = this.add.image(100,500,"wind").setScale(0.4);
        if (windDirection == 2) this.wind = this.add.image(200,100,"wind").setScale(0.4);
        if (windDirection == 3) this.wind = this.add.image(300,400,"wind").setScale(0.4);
        if (windDirection == 4) this.wind = this.add.image(400,200,"wind").setScale(0.4);
     
        isWindy = 1;
    }
    if (counter == 1000) {
        counter = 0;
        isWindy = 0;
        this.wind.y = -50;
        this.wind.x = 0;
    }

    if (isWindy == 1) {
        speedX += -0.025;
    }
       

    counter ++;

    this.rocket.y = this.rocket.y + speedY;    
    this.rocket.x = this.rocket.x + speedX; 
}

function toRadians (angle) {
    return angle * (Math.PI / 180);
}

