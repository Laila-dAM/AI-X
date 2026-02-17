import { SceneManager } from "./sceneManager.js";

export class Game {
constructor(canvas) {
this.canvas = canvas;
this.ctx = canvas.getContext("2d");
this.sceneManager = new SceneManager();
this.lastTime = 0;
this.resize();
window.addEventListener("resize", () => this.resize());
}

resize() {
this.canvas.width = window.innerWidth;
this.canvas.height = window.innerHeight;
}

start(initialScene) {
this.sceneManager.setScene(initialScene);
requestAnimationFrame((time) => this.loop(time));
}

loop(time) {
const delta = time - this.lastTime;
this.lastTime = time;
this.update(delta);
this.render();
requestAnimationFrame((t) => this.loop(t));
}

update(delta) {
this.sceneManager.update(delta);
}

render() {
this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
this.sceneManager.render(this.ctx);
}

changeScene(scene) {
this.sceneManager.setScene(scene);
}
}
