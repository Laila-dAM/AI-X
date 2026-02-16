import { Player } from "../entities/player.js";
import { AudioSystem } from "../systems/audioSystem.js";

export class ForestScene {
constructor() {
this.player = new Player(200, 200);
AudioSystem.playAmbient();
}

update(delta) {
this.player.update(delta);
}

render(ctx) {
ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

ctx.fillStyle = "#000000";
ctx.fillText("Forest - Move with WASD or Arrows", 20, 30);

this.player.render(ctx);
}
}
