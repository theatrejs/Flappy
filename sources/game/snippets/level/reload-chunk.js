export default function (entity, collision) {

    this.snippets.level['reset-position'](entity);

    const name = entity.name;
    const index = name.match(/^[a-z-]+([0-9]+)$/)[1];

    this.snippets.level['add-chunk'](index, entity.get('position').x);
};
