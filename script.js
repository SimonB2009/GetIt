let x;
let y;
let direction = 0; //from the rocket
let speedY = 0;
let speedX = 0;
let counter = 0;


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
    this.rocket.y = this.rocket.y + speedY;    
    this.rocket.x = this.rocket.x + speedX; 
 

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
        this.wind = this.add.image(400,300,"wind").setScale(0.4); 

        let i;
        
        while (i == 700) {
            i++;
            speedX += -3;
            speedY -= Math.cos(toRadians(direction)) * 0.05;
            speedX += Math.sin(toRadians(direction)) * 0.05;
        }
        
        speedX = -3;
    }

    counter ++;
}

function toRadians (angle) {
    return angle * (Math.PI / 180);
}

