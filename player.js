export class player {
  constructor(game) {
    this.game = game;
    this.width = 100;
    this.height = 91.3;
    this.x = 0;
    this.y = this.game.height - this.height;
    this.image = new Image();
    this.image.src = 'player.png';
  }

  update() {}

  draw(context) {
    if (this.image.complete && this.image.naturalWidth > 0) {
      context.drawImage(this.image, this.x, this.y, this.width, this.height);
    } else {
      context.fillStyle = 'black';
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }
}



