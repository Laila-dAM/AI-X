import { Input } from "../core/input.js";

export class Player {
constructor(x, y) {
this.x = x;
this.y = y;
this.speed = 200;
this.size = 32;
}

update(delta) {
let dx = 0;
let dy = 0;

if (Input.isDown("w") || Input.isDown("arrowup")) dy -= 1;
if (Input.isDown("s") || Input.isDown("arrowdown")) dy += 1;
if (Input.isDown("a") || Input.isDown("arrowleft")) dx -= 1;
if (Input.isDown("d") || Input.isDown("arrowright")) dx += 1;

this.x += dx * this.speed * delta;
this.y += dy * this.speed * delta;

this.x = Math.max(0, Math.min(1248, this.x));
this.y = Math.max(0, Math.min(688, this.y));
}

render(ctx) {
ctx.fillStyle = "#000000";
ctx.fillRect(this.x, this.y, this.size, this.size);
}
}
