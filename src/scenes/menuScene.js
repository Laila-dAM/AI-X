import { SceneManager } from "../systems/sceneManager.js";

export class MenuScene {
constructor() {
this.ui = document.getElementById("menu-ui");
this.play = document.getElementById("play-btn");
this.about = document.getElementById("about-btn");
this.panel = document.getElementById("about-panel");

this.play.onclick = () => {
this.ui.classList.add("hidden");
SceneManager.change("forest");
};

this.about.onclick = () => {
this.panel.classList.toggle("hidden");
};
}

update() {}

render(ctx) {
ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
ctx.fillStyle = "#000000";
ctx.font = "24px monospace";
ctx.fillText("Doodle Forest Background", 40, 60);
}
}
