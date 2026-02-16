export const AudioSystem = {
ambient: null,

init() {
this.ambient = new Audio("../assets/audio/ambient.mp3");
this.ambient.loop = true;
this.ambient.volume = 0.3;
},

playAmbient() {
if (this.ambient) this.ambient.play().catch(()=>{});
}
};
