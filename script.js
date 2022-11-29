let x;
let y;
let direction = 0; //from the rocket
let speed = -0.5;

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
}

function create ()
{
    this.add.image(500,400,"space");
    this.rocket = this.add.image(400,300,"rocket").setScale(0.4);
    this.cursors = this.input.keyboard.createCursorKeys();

}

function update ()
{
    this.rocket.y = this.rocket.y + speed; 

    if (this.cursors.left.isDown)
    {
        this.rocket.rotation -= 0.07;
    }
    if (this.cursors.right.isDown)
    {
        this.rocket.rotation += 0.07;
    }
    if (this.cursors.up.isDown)
    {
        this.rocket.y = this.rocket.y - 0.05;
        speed -= 0.05;
    }
    if (this.cursors.down.isDown)
    {
        this.rocket.y = this.rocket.y + 0.05;
        speed += 0.05;
    }
}