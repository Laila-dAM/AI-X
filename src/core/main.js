import { Config } from "./config.js";
import { Game } from "./game.js";
import { Input } from "./input.js";
import { SceneManager } from "../systems/sceneManager.js";
import { MenuScene } from "../scenes/menuScene.js";
import { ForestScene } from "../scenes/forestScene.js";
import { AudioSystem } from "../systems/audioSystem.js";

const canvas = document.getElementById("game-canvas");
canvas.width = Config.width;
canvas.height = Config.height;
const ctx = canvas.getContext("2d");

Input.init();
AudioSystem.init();

SceneManager.register("menu", new MenuScene());
SceneManager.register("forest", new ForestScene());
SceneManager.change("menu");

const game = new Game(ctx);
game.start();
