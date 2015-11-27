import Storage from './Storage';

class SessionImpl extends Storage {

    constructor() {
        super(sessionStorage);
    }
}
global.session = new SessionImpl();
export default session;