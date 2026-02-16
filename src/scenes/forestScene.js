import { Player } from "../entities/player.js";
import { AudioSystem } from "../systems/audioSystem.js";
import { TileMap } from "../systems/tileMap.js";
import { loadMap } from "../utils/mapLoader.js";
import { Config } from "../core/config.js";

export class ForestScene {
constructor() {
this.player = null;
this.map = null;
this.ready = false;
this.init();
}

async init() {
const mapData = await loadMap("../data/maps/forest-map.json");
this.map = new TileMap(mapData, Config.tileSize);
this.player = new Player(100, 100);
AudioSystem.playAmbient();
this.ready = true;
}

update(delta) {
if (!this.ready) return;

const prevX = this.player.x;
const prevY = this.player.y;

this.player.update(delta);

if (this.map.checkCollision(this.player.x, this.player.y, this.player.size)) {
this.player.x = prevX;
this.player.y = prevY;
}
}

render(ctx) {
if (!this.ready) return;

ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

this.map.render(ctx);
this.player.render(ctx);
}
}