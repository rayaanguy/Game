window.addEventListener('load', function (){
 const canvas = document.getElementById('hi');
 const ctx = canvas.getContext('2d');
 canvas.width = 500;
 canvas.height = 500;

 const game = new game(canvas.width, canvas.height);
 console.log(game);
});

class game {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    update () {

    }
    draw(){
        if (this.player) {
            this.player.draw();
        }
    }
    function 
}
