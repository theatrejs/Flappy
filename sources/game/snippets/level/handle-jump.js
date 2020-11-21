export default function (entity) {

    entity.add({

        'name': 'forces',
        'parameters': [

            {
                'x': 48,
                'y': 0,
                'duration': 1000,
                '$easing': {

                    'type': 'snippets',
                    'scope': 'common',
                    'name': 'easing-linear'
                },
                '$handling': false,
                '$ending': false,
                'elapsed': 0
            },
            {

                'x': 0,
                'y': -12,
                'duration': 200,
                '$easing': {

                    'type': 'snippets',
                    'scope': 'common',
                    'name': 'easing-out-cubic'
                },
                '$handling': false,
                '$ending': true,
                'elapsed': 0
            },
            {
                'x': 0,
                'y': 144,
                'duration': 1000,
                '$easing': {

                    'type': 'snippets',
                    'scope': 'common',
                    'name': 'easing-in-quart'
                },
                '$handling': false,
                '$ending': false,
                'elapsed': 0
            }
        ]
    });

    this.assets.sounds.level['jump']().play();
};
