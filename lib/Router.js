import Router from 'routes';
var _router = Router();

class RouterImpl {

    add(route, fn) {

        _router.addRoute(route, fn);

        var match = _router.match(document.location.pathname);

        if (match && match.fn && typeof match.fn == 'function') {
            match.fn(document.location.pathname);
        }
    }
}
global.router = new RouterImpl();
export default router;