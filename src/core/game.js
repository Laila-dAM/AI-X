import { SceneManager } from "../systems/sceneManager.js";

export class Game {
constructor(ctx) {
this.ctx = ctx;
this.lastTime = 0;
}

start() {
requestAnimationFrame(this.loop.bind(this));
}

loop(time) {
const delta = (time - this.lastTime) / 1000;
this.lastTime = time;
this.update(delta);
this.render();
requestAnimationFrame(this.loop.bind(this));
}

update(delta) {
SceneManager.update(delta);
}

render() {
SceneManager.render(this.ctx);
}
}
