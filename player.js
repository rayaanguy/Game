export class player {
  constructor(game) {
    this.game = game;
    this.width = 100;
    this.height = 93;
    this.x = 150;
    this.y = 200 ;
    this.image = new Image();
    this.image.src = 'player.png';
  }

  update() {}

  draw(ctx) {
    ctx.fillStyle = 'black';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
