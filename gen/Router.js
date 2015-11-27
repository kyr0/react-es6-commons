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
    }, {
        key: 'navigate',
        value: function navigate(hash) {
            document.location.hash = hash;
        }
    }]);

    return RouterImpl;
})();

global.router = new RouterImpl();
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJvdXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxJQUFJLE9BQU8sR0FBRyx1QkFBUSxDQUFDOztJQUVqQixVQUFVO0FBSVosYUFKRSxVQUFVLEdBSUU7Ozs4QkFKWixVQUFVOzthQUVaLGFBQWEsR0FBRyxFQUFFOzs7QUFLZCw4QkFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQU07O0FBRTdCLGtCQUFLLE9BQU8sRUFBRSxDQUFDO0FBQ2Ysa0JBQUssS0FBSyxFQUFFLENBQUM7U0FDaEIsQ0FBQyxDQUFDO0tBQ047O2lCQVpDLFVBQVU7O2tDQWNGOzs7QUFHTixpQkFBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzVDLHVCQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO2FBQzlDO1NBQ0o7Ozs0QkFFRyxLQUFLLEVBQUUsUUFBUSxFQUFFOztBQUVqQixnQkFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUU7QUFDeEIsd0JBQVEsQ0FBQyxZQUFZLEdBQUcsWUFBVyxFQUFFLENBQUM7YUFDekM7OztBQUFBLEFBR0Qsb0JBQVEsQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7O0FBRTdELG1CQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsWUFBWSxDQUFDOzs7QUFBQyxBQUcvQyxnQkFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2xEOzs7Z0NBRU87O0FBRUosZ0JBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0FBQ2xDLGdCQUFJLGFBQWEsR0FBRyxLQUFLLENBQUM7QUFDMUIsZ0JBQUksSUFBSSxJQUFJLEVBQUUsRUFBRSxJQUFJLEdBQUcsR0FBRyxDQUFDOztBQUUzQixnQkFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFaEMsZ0JBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxFQUFFLElBQUksT0FBTyxLQUFLLENBQUMsRUFBRSxJQUFJLFVBQVUsRUFBRTs7Ozs7QUFLcEQscUJBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7QUFFNUMsd0JBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBTSxLQUFLLENBQUMsRUFBRSxJQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRTtBQUNyQyxxQ0FBYSxHQUFHLElBQUksQ0FBQztxQkFDeEI7aUJBQ0o7O0FBRUQsb0JBQUksQ0FBQyxhQUFhLEVBQUU7O0FBRWhCLHlCQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2YseUJBQUssQ0FBQyxFQUFFLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztpQkFDakM7YUFDSjtTQUNKOzs7aUNBRVEsSUFBSSxFQUFFO0FBQ1gsb0JBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNqQzs7O1dBcEVDLFVBQVU7OztBQXNFaEIsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO2tCQUNsQixNQUFNIiwiZmlsZSI6IlJvdXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSAncm91dGVzJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgRXZlbnRCdXMgZnJvbSAnLi9ldmVudC9CdXMnO1xuXG52YXIgX3JvdXRlciA9IFJvdXRlcigpO1xuXG5jbGFzcyBSb3V0ZXJJbXBsIHtcblxuICAgIHJvdXRlSGFuZGxlcnMgPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIC8vIGF1dG8tbWF0Y2ggb24gaGFzaCBjaGFuZ2VcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdoYXNoY2hhbmdlJywgKCkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICAgICAgICAgIHRoaXMubWF0Y2goKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYW51cCgpIHtcblxuICAgICAgICAvLyByZXNldCBmbGFnc1xuICAgICAgICBmb3IgKHZhciBpPTA7IGk8dGhpcy5yb3V0ZUhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5yb3V0ZUhhbmRsZXJzW2ldLmhhc0JlZW5Sb3V0ZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGQocm91dGUsIGluc3RhbmNlKSB7XG5cbiAgICAgICAgaWYgKCFpbnN0YW5jZS5vblJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLm9uUm91dGVNYXRjaCA9IGZ1bmN0aW9uKCkge307XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzY29wZSBiaW5kaW5nXG4gICAgICAgIGluc3RhbmNlLm9uUm91dGVNYXRjaCA9IGluc3RhbmNlLm9uUm91dGVNYXRjaC5iaW5kKGluc3RhbmNlKTtcblxuICAgICAgICBfcm91dGVyLmFkZFJvdXRlKHJvdXRlLCBpbnN0YW5jZS5vblJvdXRlTWF0Y2gpO1xuXG4gICAgICAgIC8vIHJlZ2lzdGVyIGluIHN0YWNrXG4gICAgICAgIHRoaXMucm91dGVIYW5kbGVycy5wdXNoKGluc3RhbmNlLm9uUm91dGVNYXRjaCk7XG4gICAgfVxuXG4gICAgbWF0Y2goKSB7XG5cbiAgICAgICAgdmFyIGhhc2ggPSBkb2N1bWVudC5sb2NhdGlvbi5oYXNoO1xuICAgICAgICB2YXIgaGFzQmVlblJvdXRlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoaGFzaCA9PSAnJykgaGFzaCA9ICcjJztcblxuICAgICAgICB2YXIgbWF0Y2ggPSBfcm91dGVyLm1hdGNoKGhhc2gpO1xuXG4gICAgICAgIGlmIChtYXRjaCAmJiBtYXRjaC5mbiAmJiB0eXBlb2YgbWF0Y2guZm4gPT0gJ2Z1bmN0aW9uJykge1xuXG4gICAgICAgICAgICAvLyBjYWxsIG9ubHkgb25jZSwgZXZlbiBpZiBtdWx0aXBsZSByb3V0ZXMgYXJlXG4gICAgICAgICAgICAvLyBtYXRjaGluZyB0aGUgc2FtZSBpbnN0YW5jZSBhbmQgYXJlIG1hdGNoZWRcbiAgICAgICAgICAgIC8vIGF0IGRpZmZlcmVudCB0aW1lcy4uLlxuICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPHRoaXMucm91dGVIYW5kbGVycy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucm91dGVIYW5kbGVyc1tpXSA9PT0gIG1hdGNoLmZuICYmXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVIYW5kbGVyc1tpXS5oYXNCZWVuUm91dGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc0JlZW5Sb3V0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFoYXNCZWVuUm91dGVkKSB7XG5cbiAgICAgICAgICAgICAgICBtYXRjaC5mbihoYXNoKTtcbiAgICAgICAgICAgICAgICBtYXRjaC5mbi5oYXNCZWVuUm91dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5hdmlnYXRlKGhhc2gpIHtcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaGFzaCA9IGhhc2g7XG4gICAgfVxufVxuZ2xvYmFsLnJvdXRlciA9IG5ldyBSb3V0ZXJJbXBsKCk7XG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7Il19
//# sourceMappingURL=Router.js.map
