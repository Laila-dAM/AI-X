import { Game } from "./game.js";
import { MenuScene } from "../scenes/MenuScene.js";

const canvas = document.getElementById("game-canvas");
const game = new Game(canvas);

window.addEventListener("load", () => {
const menuScene = new MenuScene(game);
game.start(menuScene);
});
