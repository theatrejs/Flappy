import {random} from 'modules/random.js';

export default function (index, x) {

    const checkpoint = random(3);

    const pipeTop = this.$.world.prepare(this.entities.level['pipe-top']());
    pipeTop.name = 'pipe-top-' + index;
    pipeTop.get('position').x = x;
    pipeTop.get('position').y = 0 - checkpoint * 16;
    this.$.world.attach(pipeTop);

    const ceilPipe = this.$.world.prepare(this.entities.level['ceil-pipe']());
    ceilPipe.name = 'ceil-pipe-' + index;
    ceilPipe.get('position').x = x;
    this.$.world.attach(ceilPipe);

    const pipeBottom = this.$.world.prepare(this.entities.level['pipe-bottom']());
    pipeBottom.name = 'pipe-bottom-' + index;
    pipeBottom.get('position').x = x;
    pipeBottom.get('position').y = 80 - Math.min(checkpoint, 1) * 16;
    this.$.world.attach(pipeBottom);

    const floorPipe = this.$.world.prepare(this.entities.level['floor-pipe']());
    floorPipe.name = 'floor-pipe-' + index;
    floorPipe.get('position').x = x;
    this.$.world.attach(floorPipe);

    const pipeShadow = this.$.world.prepare(this.entities.level['pipe-shadow']());
    pipeShadow.name = 'pipe-shadow-' + index;
    pipeShadow.get('position').x = x;
    pipeShadow.get('position').y = 104 + Math.min(checkpoint, 1) * 8;
    this.$.world.attach(pipeShadow);
};
