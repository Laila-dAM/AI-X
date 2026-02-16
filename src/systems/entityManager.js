export const EntityManager = {
entities: [],
add(entity) {
this.entities.push(entity);
},
remove(entity) {
this.entities = this.entities.filter(e => e !== entity);
},
update(delta) {
this.entities.forEach(entity => entity.update(delta));
},
render(ctx) {
this.entities.forEach(entity => entity.render(ctx));
}
};