function render() {

    // console.log('lifecycle :', 'render level scene');

    this.context.fillStyle = '#222034';
    this.context.fillRect(0, 0, this.size.width, this.size.height);

    this.$.world.system('images', ['cameras', 'images', 'position'], this.systems.common.images);

    this.$.camera.render();
    this.$.hud.render();
}

export {render};
