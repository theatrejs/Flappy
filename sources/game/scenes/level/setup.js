import {Controllers} from 'modules/controllers.js';

function setup() {

    console.log('lifecycle :', 'setup level scene');

    this.$.controllers = new Controllers(this.element, [

        ...this.assets.datasets.debug['inputs'](),
        ...this.assets.datasets.level['inputs']()
    ]);

    this.$.camera = this.snippets.common['setup-camera']('default', 'contain-framed', 160, 144, 1);
    this.$.hud = this.snippets.common['setup-camera']('hud', 'contain-framed', 160, 144, 1);
    this.$.world = this.snippets.common['setup-world']();
}

export {setup};
