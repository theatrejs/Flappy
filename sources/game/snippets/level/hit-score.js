import * as memory from 'modules/memory.js';

export default function (entity) {

    this.$.score += 1;

    if (this.$.score > this.$.best) {

        this.$.best = this.$.score;
        memory.set('best', this.$.best);
        this.snippets.level['best-score']();
    }

    entity.get('position').x += 64;

    const score = this.$.world.get('score');

    const text = '' + this.$.score;
    const numbers = text.length;
    const images = [];

    for (let index = 0; index < numbers; index += 1) {

        const image = {

            'name': 'idle',
            '$source': {

                'type': 'images',
                'scope': 'level',
                'name': 'numbers-8x16@1x'
            },
            'frames': [

                [parseInt(text[index], 10), 0, 8, 16]
            ],
            'frame': 0,
            'framerate': 8,
            'destination': [8 * index - 4 * (numbers - 1), 0, 0, 8, 16],
            'opacity': 1,
            'elapsed': 0
        };

        images.push(image);
    }

    score.add({

        'name': 'images',
        'parameters': images
    });

    this.assets.sounds.level['score']().play();
};
