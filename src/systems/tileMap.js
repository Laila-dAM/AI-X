export class TileMap {
constructor(mapData, tileSize) {
this.width = mapData.width;
this.height = mapData.height;
this.tiles = mapData.tiles;
this.collisions = mapData.collisions;
this.tileSize = tileSize;
}

getIndex(tx, ty) {
if (tx < 0 || ty < 0 || tx >= this.width || ty >= this.height) return -1;
return ty * this.width + tx;
}

isSolid(tx, ty) {
const index = this.getIndex(tx, ty);
if (index === -1) return true;
return this.collisions[index] === 1;
}

checkCollision(x, y, size) {
const left = Math.floor(x / this.tileSize);
const right = Math.floor((x + size - 1) / this.tileSize);
const top = Math.floor(y / this.tileSize);
const bottom = Math.floor((y + size - 1) / this.tileSize);

if (this.isSolid(left, top)) return true;
if (this.isSolid(right, top)) return true;
if (this.isSolid(left, bottom)) return true;
if (this.isSolid(right, bottom)) return true;

return false;
}

render(ctx) {
for (let y = 0; y < this.height; y++) {
for (let x = 0; x < this.width; x++) {
const index = y * this.width + x;
const tile = this.tiles[index];

const px = x * this.tileSize;
const py = y * this.tileSize;

ctx.fillStyle = tile === 1 ? "#000000" : "#ffffff";
ctx.fillRect(px, py, this.tileSize, this.tileSize);

ctx.strokeStyle = "#000000";
ctx.strokeRect(px, py, this.tileSize, this.tileSize);
}
}
}
}