export const Renderer = {
ctx: null,
scene: null,
init(canvas) {
this.ctx = canvas.getContext("2d");
},
setScene(scene) {
this.scene = scene;
},
render() {
if (!this.ctx || !this.scene) return;

this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

if (this.scene.background) this.scene.background.render(this.ctx);
if (this.scene.map) this.scene.map.render(this.ctx);
if (this.scene.entities) {
this.scene.entities.forEach(entity => entity.render(this.ctx));
}
if (this.scene.ui) this.scene.ui.render(this.ctx);
}
};