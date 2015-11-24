import EventBus from './event/Bus';
import Router from './Router';
import Trait from './Trait';
import DOMBind from './trait/DOMBind';

export default class AppModule {

    constructor() {

        EventBus.on('appStarted', (appInstance) => {

            // inject DOM autobinding
            Trait.inject(this, DOMBind);

            // set app reference
            this.app = appInstance;

            if (!appInstance.modules) {
                appInstance.modules = {};
            }

            // register module within application instance by name
            appInstance.modules[this.constructor.name] = this;

            // call lifecycle method
            this.onStart();

            // call routing lifecycle method
            this.onRoute();

            // trigger a matching
            router.match();

            EventBus.emit('moduleStarted', this);
        });
    }

    // override
    onStart() {}
}