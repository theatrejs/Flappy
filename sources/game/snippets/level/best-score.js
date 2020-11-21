export default function () {

    const bestScore = this.$.world.prepare(this.entities.level['best-score']());

    const text = '' + this.$.best;
    const numbers = text.length;
    const images = [

        {
            'name': 'best',
            '$source': {

                'type': 'images',
                'scope': 'level',
                'name': 'best-48x16@1x'
            },
            'frames': [

                [0, 0, 48, 16]
            ],
            'frame': 0,
            'framerate': 8,
            'destination': [0, 0, 0, 48, 16],
            'opacity': 1,
            'elapsed': 0
        }
    ];

    for (let index = 0; index < numbers; index += 1) {

        const image = {

            'name': 'idle',
            '$source': {

                'type': 'images',
                'scope': 'level',
                'name': 'numbers-blue-8x16@1x'
            },
            'frames': [

                [parseInt(text[index], 10), 0, 8, 16]
            ],
            'frame': 0,
            'framerate': 8,
            'destination': [156 - (numbers - index) * 8, 0, 0, 8, 16],
            'opacity': 1,
            'elapsed': 0
        };

        images.push(image);
    }

    bestScore.add({

        'name': 'images',
        'parameters': images
    });

    this.$.world.attach(bestScore);
};
