'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _routes = require('routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _router = (0, _routes2.default)();

var RouterImpl = (function () {
    function RouterImpl() {
        _classCallCheck(this, RouterImpl);
    }

    _createClass(RouterImpl, [{
        key: 'add',
        value: function add(route, fn) {

            _router.addRoute(route, fn);

            var match = _router.match(document.location.pathname);

            if (match && match.fn && typeof match.fn == 'function') {
                match.fn(document.location.pathname);
            }
        }
    }]);

    return RouterImpl;
})();

global.router = new RouterImpl();
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJvdXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSSxPQUFPLEdBQUcsdUJBQVEsQ0FBQzs7SUFFakIsVUFBVTthQUFWLFVBQVU7OEJBQVYsVUFBVTs7O2lCQUFWLFVBQVU7OzRCQUVSLEtBQUssRUFBRSxFQUFFLEVBQUU7O0FBRVgsbUJBQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztBQUU1QixnQkFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztBQUV0RCxnQkFBSSxLQUFLLElBQUksS0FBSyxDQUFDLEVBQUUsSUFBSSxPQUFPLEtBQUssQ0FBQyxFQUFFLElBQUksVUFBVSxFQUFFO0FBQ3BELHFCQUFLLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDeEM7U0FDSjs7O1dBWEMsVUFBVTs7O0FBYWhCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztrQkFDbEIsTUFBTSIsImZpbGUiOiJSb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gJ3JvdXRlcyc7XG52YXIgX3JvdXRlciA9IFJvdXRlcigpO1xuXG5jbGFzcyBSb3V0ZXJJbXBsIHtcblxuICAgIGFkZChyb3V0ZSwgZm4pIHtcblxuICAgICAgICBfcm91dGVyLmFkZFJvdXRlKHJvdXRlLCBmbik7XG5cbiAgICAgICAgdmFyIG1hdGNoID0gX3JvdXRlci5tYXRjaChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSk7XG5cbiAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoLmZuICYmIHR5cGVvZiBtYXRjaC5mbiA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBtYXRjaC5mbihkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5nbG9iYWwucm91dGVyID0gbmV3IFJvdXRlckltcGwoKTtcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsiXX0=
//# sourceMappingURL=Router.js.map
