import { player } from './player.js';

window.addEventListener('load', function () {
  const canvas = document.getElementById('hi');
  const ctx = canvas.getContext('2d');
  canvas.width = 500;
  canvas.height = 500;

  const game = new Game(canvas.width, canvas.height);
  console.log(game);

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update();
    game.draw(ctx);
    requestAnimationFrame(animate);
  }

  
});

class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.player = new player(this);
  }

  update() {}


  draw(context) {
    this.player.draw(context);
  }
}
