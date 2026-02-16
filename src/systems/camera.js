export class Camera {
constructor(viewportWidth, viewportHeight) {
this.x = 0;
this.y = 0;
this.width = viewportWidth;
this.height = viewportHeight;
}

follow(target) {
this.x = target.x + target.size / 2 - this.width / 2;
this.y = target.y + target.size / 2 - this.height / 2;
}

apply(ctx) {
ctx.setTransform(1, 0, 0, 1, -this.x, -this.y);
}

reset(ctx) {
ctx.setTransform(1, 0, 0, 1, 0, 0);
}
}