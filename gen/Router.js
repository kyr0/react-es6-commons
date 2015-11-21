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

            _router.addRoute(route, function () {});

            if (_router.match(document.location.pathname)) {
                fn(document.location.pathname);
            }
        }
    }]);

    return RouterImpl;
})();

global.router = new RouterImpl();
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJvdXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSSxPQUFPLEdBQUcsdUJBQVEsQ0FBQzs7SUFFakIsVUFBVTthQUFWLFVBQVU7OEJBQVYsVUFBVTs7O2lCQUFWLFVBQVU7OzRCQUVSLEtBQUssRUFBRSxFQUFFLEVBQUU7O0FBRVgsbUJBQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFlBQVcsRUFBRSxDQUFDLENBQUM7O0FBRXZDLGdCQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUMzQyxrQkFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbEM7U0FDSjs7O1dBVEMsVUFBVTs7O0FBV2hCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztrQkFDbEIsTUFBTSIsImZpbGUiOiJSb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gJ3JvdXRlcyc7XG52YXIgX3JvdXRlciA9IFJvdXRlcigpO1xuXG5jbGFzcyBSb3V0ZXJJbXBsIHtcblxuICAgIGFkZChyb3V0ZSwgZm4pIHtcblxuICAgICAgICBfcm91dGVyLmFkZFJvdXRlKHJvdXRlLCBmdW5jdGlvbigpIHt9KTtcblxuICAgICAgICBpZiAoX3JvdXRlci5tYXRjaChkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIGZuKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmdsb2JhbC5yb3V0ZXIgPSBuZXcgUm91dGVySW1wbCgpO1xuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyJdfQ==
//# sourceMappingURL=Router.js.map
