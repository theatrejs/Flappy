function destroy() {

    console.log('lifecycle :', 'destroy level scene');
    console.log('---------');

    this.$.controllers.destroy();

    delete this.$.best;
    delete this.$.camera;
    delete this.$.controllers;
    delete this.$.debugging;
    delete this.$.hud;
    delete this.$.score;
    delete this.$.world;
}

export {destroy};
