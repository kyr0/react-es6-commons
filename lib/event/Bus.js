import Observable from './Observable';

class Bus extends Observable {
   // NOP
}

if (!global.EventBus) {
    global.EventBus = new Bus();
}
export default global.EventBus;
