export default function (entity) {

    this.snippets.common['remove-entity'](entity);

    const x = (16 * Math.ceil(this.$.world.get('background').get('position').x / 16)) + 160;

    const hitScore = this.$.world.prepare(this.entities.level['hit-score']());
    hitScore.name = 'hit-score';
    hitScore.get('position').x = x + 32;
    this.$.world.attach(hitScore);

    for (let index = 1; index < 6; index += 1) {

        const chunk = this.$.world.prepare(this.entities.level['chunk']());
        chunk.name = 'chunk-' + index;
        chunk.get('position').x = x + 4 * 16 * (index - 1);
        this.$.world.attach(chunk);

        this.snippets.level['add-chunk'](index, chunk.get('position').x);
    }
};
