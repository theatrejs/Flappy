import * as memory from 'modules/memory.js';

function start() {

    console.log('lifecycle :', 'start level scene');

    this.$.best = memory.get('best') || 0;
    this.$.debugging = {};
    this.$.score = 0;

    this.$.world.initialize([

        ...this.pools.level.start()
    ]);

    this.snippets.level['best-score']();

    this.$.camera.look(

        () => this.$.world.get('background').get('position').x + 80,
        () => this.$.world.get('background').get('position').y + 72
    );

    this.$.hud.look(

        () => 80,
        () => 72
    );

    this.assets.sounds.level['start']().play();
}

export {start};
