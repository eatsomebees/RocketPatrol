function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
      super(scene, x, y, texture, frame);

      // add object to existing scene
      scene.add.existing(this);

      //store point value
      this.points = pointValue;

      //sets ship direction
      this.dir = getRandomInt(2);
    }

    update() {

        //move ship left or right
        if(this.dir == 1)
        {
          this.x -= game.settings.spaceshipSpeed;
          //wrap around screen from left to right
          if(this.x <= 0-this.width)
          {
            this.reset();
          }
        }
        else
        {
          this.x += game.settings.spaceshipSpeed;
          if(this.x > game.config.width)
          {
            this.reset();
          }
        }
        

    }
        
    reset() {
      if(this.dir == 1)
      {
        this.x = game.config.width;
      }
      else
      {
        this.x = 0-this.width;
      }
        
        
    }
  }