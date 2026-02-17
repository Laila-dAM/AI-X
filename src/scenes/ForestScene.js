export class ForestScene {
constructor(game) {
this.game = game;
this.player = {
x: 200,
y: 200,
size: 32,
speed: 3
};
this.keys = {};
this.handleKeyDown = (e) => this.keys[e.key.toLowerCase()] = true;
this.handleKeyUp = (e) => this.keys[e.key.toLowerCase()] = false;
}

enter() {
window.addEventListener("keydown", this.handleKeyDown);
window.addEventListener("keyup", this.handleKeyUp);
}

exit() {
window.removeEventListener("keydown", this.handleKeyDown);
window.removeEventListener("keyup", this.handleKeyUp);
}

update() {
if (this.keys["w"] || this.keys["arrowup"]) this.player.y -= this.player.speed;
if (this.keys["s"] || this.keys["arrowdown"]) this.player.y += this.player.speed;
if (this.keys["a"] || this.keys["arrowleft"]) this.player.x -= this.player.speed;
if (this.keys["d"] || this.keys["arrowright"]) this.player.x += this.player.speed;

const maxX = this.game.canvas.width - this.player.size;
const maxY = this.game.canvas.height - this.player.size;

if (this.player.x < 0) this.player.x = 0;
if (this.player.y < 0) this.player.y = 0;
if (this.player.x > maxX) this.player.x = maxX;
if (this.player.y > maxY) this.player.y = maxY;
}

render(ctx) {
ctx.fillStyle = "#0b0b0b";
ctx.fillRect(0, 0, this.game.canvas.width, this.game.canvas.height);

ctx.fillStyle = "#1a3d1a";
for (let i = 0; i < this.game.canvas.width; i += 128) {
ctx.fillRect(i, this.game.canvas.height - 120, 128, 120);
}

ctx.fillStyle = "#000";
ctx.fillRect(this.player.x, this.player.y, this.player.size, this.player.size);

ctx.fillStyle = "#2aff87";
ctx.font = "20px Arial";
ctx.fillText("Forest Scene - Prototype", 20, 40);
}
}
