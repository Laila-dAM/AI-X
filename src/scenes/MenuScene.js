import { ForestScene } from "./ForestScene.js";

export class MenuScene {
constructor(game) {
this.game = game;
this.menuUI = document.getElementById("menu-ui");
this.playBtn = document.getElementById("play-btn");
this.boundPlay = () => this.startGame();
}

enter() {
this.menuUI.classList.remove("hidden");
this.playBtn.addEventListener("click", this.boundPlay);
}

exit() {
this.menuUI.classList.add("hidden");
this.playBtn.removeEventListener("click", this.boundPlay);
}

startGame() {
this.game.changeScene(new ForestScene(this.game));
}

update() {}

render(ctx) {
ctx.fillStyle = "#000";
ctx.fillRect(0, 0, this.game.canvas.width, this.game.canvas.height);
}
}
