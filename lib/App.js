import EventBus from './event/Bus';

export default class App {

    // override
    onDelayedStart(startNow) {
        startNow();
    }

    constructor() {

        this.exportGlobals();

        var startPromise = new Promise(this.onDelayedStart);

        startPromise.then(() => {
            this.startThru();
        });
    }

    exportGlobals() {
        global.app = this;
    }

    startThru() {

        this.onStart();

        // fire event: App started
        EventBus.emit('appStarted', this);
    }

    // override
    onStart() {}
}