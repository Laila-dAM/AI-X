export class SceneManager {
constructor() {
this.currentScene = null;
}

setScene(scene) {
if (this.currentScene && this.currentScene.exit) {
this.currentScene.exit();
}
this.currentScene = scene;
if (this.currentScene.enter) {
this.currentScene.enter();
}
}

update(delta) {
if (this.currentScene && this.currentScene.update) {
this.currentScene.update(delta);
}
}

render(ctx) {
if (this.currentScene && this.currentScene.render) {
this.currentScene.render(ctx);
}
}
}
