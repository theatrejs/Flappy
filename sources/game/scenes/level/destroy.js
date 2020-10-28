function destroy() {

    console.log('lifecycle :', 'destroy level scene');
    console.log('---------');

    this.$.controllers.destroy();

    delete this.$.camera;
    delete this.$.controllers;
    delete this.$.origins;
    delete this.$.world;
}

export {destroy};
