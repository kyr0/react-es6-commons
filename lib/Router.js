import Router from 'routes';
var _router = Router();

class RouterImpl {

    add(route, fn) {

        _router.addRoute(route, function() {});

        if (_router.match(document.location.pathname)) {
            fn(document.location.pathname);
        }
    }
}
global.router = new RouterImpl();
export default router;