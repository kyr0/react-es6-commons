export default class Storage {

    constructor(storage) {
        this.storage = storage;
    }

    get(key) {

        if (this.has(key)) {
            return JSON.parse(this.storage.getItem(key));
        }
        return null;
    }

    set(key, payload) {
        return this.storage.setItem(key, JSON.stringify(payload));
    }

    has(key) {

        if (this.storage.getItem(key)) {
            return true;
        }
        return false;
    }

    clear() {
        return this.storage.clear();
    }

    unset(key) {
        return this.storage.removeItem(key);
    }

    size() {
        return this.storage.length;
    }
}