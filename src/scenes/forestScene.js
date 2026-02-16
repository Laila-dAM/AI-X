import { Player } from "../entities/player.js";
import { AudioSystem } from "../systems/audioSystem.js";
import { TileMap } from "../systems/tileMap.js";
import { loadMap } from "../utils/mapLoader.js";
import { Config } from "../core/config.js";
import { EntityManager } from "../systems/entityManager.js";

export class ForestScene {
constructor() {
this.map = null;
this.ready = false;
this.init();
}

async init() {
const mapData = await loadMap("../data/maps/forest-map.json");
this.map = new TileMap(mapData, Config.tileSize);
const player = new Player(100, 100);
EntityManager.add(player);
AudioSystem.playAmbient();
this.ready = true;
}

update(delta) {
if (!this.ready) return;

EntityManager.update(delta);

EntityManager.entities.forEach(entity => {
if (this.map.checkCollision(entity.x, entity.y, entity.size)) {
entity.x = entity.prevX ?? entity.x;
entity.y = entity.prevY ?? entity.y;
}
});
}

render(ctx) {
if (!this.ready) return;

ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

this.map.render(ctx);
EntityManager.render(ctx);
}
}