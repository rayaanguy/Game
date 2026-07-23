import { player } from './player.js';
window.addEventListener('load', function () {
 const canvas = document.getElementById('canvas');
   const ctx = canvas.getContext('2d');
   canvas.width = 500;
   canvas.height = 500;

    const game = new Game(canvas.width , canvas.height);
              game.draw(ctx);
              });

class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.player = new player(this);
  }

  draw(context) {
    this.player.draw(context);
  }
  update(){

  }
}

