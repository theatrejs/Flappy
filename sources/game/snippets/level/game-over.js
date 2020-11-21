export default function (entity, collision) {

    entity.remove(['forces', 'hitbox', 'inputs']);

    if (entity.has('velocity') === false) {

        entity.add({

            'name': 'velocity',
            'parameters': {

                'top': 0,
                'right': 0,
                'bottom': 0,
                'left': 0
            }
        });
    }

    const velocityComponent = entity.get('velocity');

    if (collision.from.top === true) {

        velocityComponent.bottom = collision.delta.top;
    }

    if (collision.from.right === true) {

        velocityComponent.left = collision.delta.right;
    }

    if (collision.from.bottom === true) {

        velocityComponent.top = collision.delta.bottom;
    }

    if (collision.from.left === true) {

        velocityComponent.right = collision.delta.left;
    }

    entity.add({

        'name': 'forces',
        'parameters': [

            {
                'x': collision.from.right === true ? -24 : 24,
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
                'y': -16,
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
                'y': 16,
                'duration': 400,
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

    this.$.camera.shake(4, 4, 200);
    this.$.hud.shake(2, 2, 200);

    this.assets.sounds.level['explode']().play();

    this.$.world.add(this.entities.level['game-over']());
};
