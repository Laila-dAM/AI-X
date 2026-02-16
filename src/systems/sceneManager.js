export const SceneManager = {
scenes: {},
current: null,
fade: 0,
next: null,

register(name, scene) {
this.scenes[name] = scene;
},

change(name) {
this.next = this.scenes[name];
this.fade = 1;
},

update(delta) {
if (this.fade > 0) {
this.fade -= delta * 2;
if (this.fade <= 0 && this.next) {
this.current = this.next;
this.next = null;
}
}
if (this.current) this.current.update(delta);
},

render(ctx) {
ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
if (this.current) this.current.render(ctx);
if (this.fade > 0) {
ctx.fillStyle = `rgba(0,0,0,${this.fade})`;
ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
}
};
