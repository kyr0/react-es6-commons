'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _routes = require('routes');

var _routes2 = _interopRequireDefault(_routes);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _Bus = require('./event/Bus');

var _Bus2 = _interopRequireDefault(_Bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _router = (0, _routes2.default)();

var RouterImpl = (function () {
    function RouterImpl() {
        var _this = this;

        _classCallCheck(this, RouterImpl);

        this.routeHandlers = [];

        // auto-match on hash change
        (0, _jquery2.default)(window).on('hashchange', function () {

            _this.cleanup();
            _this.match();
        });
    }

    _createClass(RouterImpl, [{
        key: 'cleanup',
        value: function cleanup() {

            // reset flags
            for (var i = 0; i < this.routeHandlers.length; i++) {
                delete this.routeHandlers[i].hasBeenRouted;
            }
        }
    }, {
        key: 'add',
        value: function add(route, instance) {

            if (!instance.onRouteMatch) {
                instance.onRouteMatch = function () {};
            }

            // scope binding
            instance.onRouteMatch = instance.onRouteMatch.bind(instance);

            _router.addRoute(route, instance.onRouteMatch);

            // register in stack
            this.routeHandlers.push(instance.onRouteMatch);
        }
    }, {
        key: 'match',
        value: function match() {

            var hash = document.location.hash;
            var hasBeenRouted = false;
            if (hash == '') hash = '#';

            var match = _router.match(hash);

            if (match && match.fn && typeof match.fn == 'function') {

                // call only once, even if multiple routes are
                // matching the same instance and are matched
                // at different times...
                for (var i = 0; i < this.routeHandlers.length; i++) {

                    if (this.routeHandlers[i] === match.fn && this.routeHandlers[i].hasBeenRouted) {
                        hasBeenRouted = true;
                    }
                }

                if (!hasBeenRouted) {

                    match.fn(hash);
                    match.fn.hasBeenRouted = true;
                }
            }
        }
    }]);

    return RouterImpl;
})();

global.router = new RouterImpl();
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJvdXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxJQUFJLE9BQU8sR0FBRyx1QkFBUSxDQUFDOztJQUVqQixVQUFVO0FBSVosYUFKRSxVQUFVLEdBSUU7Ozs4QkFKWixVQUFVOzthQUVaLGFBQWEsR0FBRyxFQUFFOzs7QUFLZCw4QkFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQU07O0FBRTdCLGtCQUFLLE9BQU8sRUFBRSxDQUFDO0FBQ2Ysa0JBQUssS0FBSyxFQUFFLENBQUM7U0FDaEIsQ0FBQyxDQUFDO0tBQ047O2lCQVpDLFVBQVU7O2tDQWNGOzs7QUFHTixpQkFBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzVDLHVCQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO2FBQzlDO1NBQ0o7Ozs0QkFFRyxLQUFLLEVBQUUsUUFBUSxFQUFFOztBQUVqQixnQkFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUU7QUFDeEIsd0JBQVEsQ0FBQyxZQUFZLEdBQUcsWUFBVyxFQUFFLENBQUM7YUFDekM7OztBQUFBLEFBR0Qsb0JBQVEsQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7O0FBRTdELG1CQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsWUFBWSxDQUFDOzs7QUFBQyxBQUcvQyxnQkFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2xEOzs7Z0NBRU87O0FBRUosZ0JBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0FBQ2xDLGdCQUFJLGFBQWEsR0FBRyxLQUFLLENBQUM7QUFDMUIsZ0JBQUksSUFBSSxJQUFJLEVBQUUsRUFBRSxJQUFJLEdBQUcsR0FBRyxDQUFDOztBQUUzQixnQkFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFaEMsZ0JBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxFQUFFLElBQUksT0FBTyxLQUFLLENBQUMsRUFBRSxJQUFJLFVBQVUsRUFBRTs7Ozs7QUFLcEQscUJBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7QUFFNUMsd0JBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBTSxLQUFLLENBQUMsRUFBRSxJQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRTtBQUNyQyxxQ0FBYSxHQUFHLElBQUksQ0FBQztxQkFDeEI7aUJBQ0o7O0FBRUQsb0JBQUksQ0FBQyxhQUFhLEVBQUU7O0FBRWhCLHlCQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2YseUJBQUssQ0FBQyxFQUFFLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztpQkFDakM7YUFDSjtTQUNKOzs7V0FoRUMsVUFBVTs7O0FBa0VoQixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7a0JBQ2xCLE1BQU0iLCJmaWxlIjoiUm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tICdyb3V0ZXMnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBFdmVudEJ1cyBmcm9tICcuL2V2ZW50L0J1cyc7XG5cbnZhciBfcm91dGVyID0gUm91dGVyKCk7XG5cbmNsYXNzIFJvdXRlckltcGwge1xuXG4gICAgcm91dGVIYW5kbGVycyA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgLy8gYXV0by1tYXRjaCBvbiBoYXNoIGNoYW5nZVxuICAgICAgICAkKHdpbmRvdykub24oJ2hhc2hjaGFuZ2UnLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgICAgICAgICAgdGhpcy5tYXRjaCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGVhbnVwKCkge1xuXG4gICAgICAgIC8vIHJlc2V0IGZsYWdzXG4gICAgICAgIGZvciAodmFyIGk9MDsgaTx0aGlzLnJvdXRlSGFuZGxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJvdXRlSGFuZGxlcnNbaV0uaGFzQmVlblJvdXRlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZChyb3V0ZSwgaW5zdGFuY2UpIHtcblxuICAgICAgICBpZiAoIWluc3RhbmNlLm9uUm91dGVNYXRjaCkge1xuICAgICAgICAgICAgaW5zdGFuY2Uub25Sb3V0ZU1hdGNoID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNjb3BlIGJpbmRpbmdcbiAgICAgICAgaW5zdGFuY2Uub25Sb3V0ZU1hdGNoID0gaW5zdGFuY2Uub25Sb3V0ZU1hdGNoLmJpbmQoaW5zdGFuY2UpO1xuXG4gICAgICAgIF9yb3V0ZXIuYWRkUm91dGUocm91dGUsIGluc3RhbmNlLm9uUm91dGVNYXRjaCk7XG5cbiAgICAgICAgLy8gcmVnaXN0ZXIgaW4gc3RhY2tcbiAgICAgICAgdGhpcy5yb3V0ZUhhbmRsZXJzLnB1c2goaW5zdGFuY2Uub25Sb3V0ZU1hdGNoKTtcbiAgICB9XG5cbiAgICBtYXRjaCgpIHtcblxuICAgICAgICB2YXIgaGFzaCA9IGRvY3VtZW50LmxvY2F0aW9uLmhhc2g7XG4gICAgICAgIHZhciBoYXNCZWVuUm91dGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChoYXNoID09ICcnKSBoYXNoID0gJyMnO1xuXG4gICAgICAgIHZhciBtYXRjaCA9IF9yb3V0ZXIubWF0Y2goaGFzaCk7XG5cbiAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoLmZuICYmIHR5cGVvZiBtYXRjaC5mbiA9PSAnZnVuY3Rpb24nKSB7XG5cbiAgICAgICAgICAgIC8vIGNhbGwgb25seSBvbmNlLCBldmVuIGlmIG11bHRpcGxlIHJvdXRlcyBhcmVcbiAgICAgICAgICAgIC8vIG1hdGNoaW5nIHRoZSBzYW1lIGluc3RhbmNlIGFuZCBhcmUgbWF0Y2hlZFxuICAgICAgICAgICAgLy8gYXQgZGlmZmVyZW50IHRpbWVzLi4uXG4gICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8dGhpcy5yb3V0ZUhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yb3V0ZUhhbmRsZXJzW2ldID09PSAgbWF0Y2guZm4gJiZcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZUhhbmRsZXJzW2ldLmhhc0JlZW5Sb3V0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzQmVlblJvdXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWhhc0JlZW5Sb3V0ZWQpIHtcblxuICAgICAgICAgICAgICAgIG1hdGNoLmZuKGhhc2gpO1xuICAgICAgICAgICAgICAgIG1hdGNoLmZuLmhhc0JlZW5Sb3V0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZ2xvYmFsLnJvdXRlciA9IG5ldyBSb3V0ZXJJbXBsKCk7XG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7Il19
//# sourceMappingURL=Router.js.map
