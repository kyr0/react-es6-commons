import Storage from './Storage';

class DatabaseImpl extends Storage {

    constructor() {
        super(localStorage);
    }
}
global.db = new DatabaseImpl();
export default db;