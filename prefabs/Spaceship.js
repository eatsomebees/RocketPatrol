// Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
      super(scene, x, y, texture, frame);
      scene.add.existing(this);

      //store point value
      this.points = pointValue;
    }

    update() {
        //move ship left
        this.x -= 3;

        //wrap around screen from left to right
        if(this.x <= 0-this.width)
        {
            this.x = game.config.width;
        }

    }
        
  }