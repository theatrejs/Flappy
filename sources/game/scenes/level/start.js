function start() {

    console.log('lifecycle :', 'start level scene');

    this.$.world.initialize([

        //
    ]);

    this.$.camera.look(

        this.$.origin.x,
        this.$.origin.y
    );
}

export {start};
