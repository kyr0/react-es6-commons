import Router from 'routes';
import $ from 'jquery';
import EventBus from './event/Bus';

var _router = Router();

class RouterImpl {

    routeHandlers = [];

    constructor() {

        // auto-match on hash change
        $(window).on('hashchange', () => {

            this.cleanup();
            this.match();
        });
    }

    cleanup() {

        // reset flags
        for (var i=0; i<this.routeHandlers.length; i++) {
            delete this.routeHandlers[i].hasBeenRouted;
        }
    }

    add(route, instance) {

        if (!instance.onRouteMatch) {
            instance.onRouteMatch = function() {};
        }

        // scope binding
        instance.onRouteMatch = instance.onRouteMatch.bind(instance);

        _router.addRoute(route, instance.onRouteMatch);

        // register in stack
        this.routeHandlers.push(instance.onRouteMatch);
    }

    match() {

        var hash = document.location.hash;
        var hasBeenRouted = false;
        if (hash == '') hash = '#';

        var match = _router.match(hash);

        if (match && match.fn && typeof match.fn == 'function') {

            // call only once, even if multiple routes are
            // matching the same instance and are matched
            // at different times...
            for (var i=0; i<this.routeHandlers.length; i++) {

                if (this.routeHandlers[i] ===  match.fn &&
                    this.routeHandlers[i].hasBeenRouted) {
                    hasBeenRouted = true;
                }
            }

            if (!hasBeenRouted) {

                match.fn(hash);
                match.fn.hasBeenRouted = true;
            }
        }
    }
}
global.router = new RouterImpl();
export default router;