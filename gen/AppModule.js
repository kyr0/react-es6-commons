'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Bus = require('./event/Bus');

var _Bus2 = _interopRequireDefault(_Bus);

var _Router = require('./Router');

var _Router2 = _interopRequireDefault(_Router);

var _Trait = require('./Trait');

var _Trait2 = _interopRequireDefault(_Trait);

var _DOMBind = require('./trait/DOMBind');

var _DOMBind2 = _interopRequireDefault(_DOMBind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppModule = (function () {
    function AppModule() {
        var _this = this;

        _classCallCheck(this, AppModule);

        _Bus2.default.on('appStarted', function (appInstance) {

            // inject DOM autobinding
            _Trait2.default.inject(_this, _DOMBind2.default);

            // set app reference
            _this.app = appInstance;

            if (!appInstance.modules) {
                appInstance.modules = {};
            }

            // register module within application instance by name
            appInstance.modules[_this.constructor.name] = _this;

            // call lifecycle method
            _this.onStart();

            // call routing lifecycle method
            _this.onRoute();

            // trigger a matching
            router.match();

            _Bus2.default.emit('moduleStarted', _this);
        });
    }

    // override

    _createClass(AppModule, [{
        key: 'onStart',
        value: function onStart() {}
    }]);

    return AppModule;
})();

exports.default = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcE1vZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS3FCLFNBQVM7QUFFMUIsYUFGaUIsU0FBUyxHQUVaOzs7OEJBRkcsU0FBUzs7QUFJdEIsc0JBQVMsRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFDLFdBQVcsRUFBSzs7O0FBR3ZDLDRCQUFNLE1BQU0sMEJBQWU7OztBQUFDLEFBRzVCLGtCQUFLLEdBQUcsR0FBRyxXQUFXLENBQUM7O0FBRXZCLGdCQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRTtBQUN0QiwyQkFBVyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7YUFDNUI7OztBQUFBLEFBR0QsdUJBQVcsQ0FBQyxPQUFPLENBQUMsTUFBSyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQU87OztBQUFDLEFBR2xELGtCQUFLLE9BQU8sRUFBRTs7O0FBQUMsQUFHZixrQkFBSyxPQUFPLEVBQUU7OztBQUFDLEFBR2Ysa0JBQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7QUFFZiwwQkFBUyxJQUFJLENBQUMsZUFBZSxRQUFPLENBQUM7U0FDeEMsQ0FBQyxDQUFDO0tBQ047OztBQUFBO2lCQTlCZ0IsU0FBUzs7a0NBaUNoQixFQUFFOzs7V0FqQ0ssU0FBUzs7O2tCQUFULFNBQVMiLCJmaWxlIjoiQXBwTW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2ZW50QnVzIGZyb20gJy4vZXZlbnQvQnVzJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9Sb3V0ZXInO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4vVHJhaXQnO1xuaW1wb3J0IERPTUJpbmQgZnJvbSAnLi90cmFpdC9ET01CaW5kJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwTW9kdWxlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIEV2ZW50QnVzLm9uKCdhcHBTdGFydGVkJywgKGFwcEluc3RhbmNlKSA9PiB7XG5cbiAgICAgICAgICAgIC8vIGluamVjdCBET00gYXV0b2JpbmRpbmdcbiAgICAgICAgICAgIFRyYWl0LmluamVjdCh0aGlzLCBET01CaW5kKTtcblxuICAgICAgICAgICAgLy8gc2V0IGFwcCByZWZlcmVuY2VcbiAgICAgICAgICAgIHRoaXMuYXBwID0gYXBwSW5zdGFuY2U7XG5cbiAgICAgICAgICAgIGlmICghYXBwSW5zdGFuY2UubW9kdWxlcykge1xuICAgICAgICAgICAgICAgIGFwcEluc3RhbmNlLm1vZHVsZXMgPSB7fTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcmVnaXN0ZXIgbW9kdWxlIHdpdGhpbiBhcHBsaWNhdGlvbiBpbnN0YW5jZSBieSBuYW1lXG4gICAgICAgICAgICBhcHBJbnN0YW5jZS5tb2R1bGVzW3RoaXMuY29uc3RydWN0b3IubmFtZV0gPSB0aGlzO1xuXG4gICAgICAgICAgICAvLyBjYWxsIGxpZmVjeWNsZSBtZXRob2RcbiAgICAgICAgICAgIHRoaXMub25TdGFydCgpO1xuXG4gICAgICAgICAgICAvLyBjYWxsIHJvdXRpbmcgbGlmZWN5Y2xlIG1ldGhvZFxuICAgICAgICAgICAgdGhpcy5vblJvdXRlKCk7XG5cbiAgICAgICAgICAgIC8vIHRyaWdnZXIgYSBtYXRjaGluZ1xuICAgICAgICAgICAgcm91dGVyLm1hdGNoKCk7XG5cbiAgICAgICAgICAgIEV2ZW50QnVzLmVtaXQoJ21vZHVsZVN0YXJ0ZWQnLCB0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gb3ZlcnJpZGVcbiAgICBvblN0YXJ0KCkge31cbn0iXX0=
//# sourceMappingURL=AppModule.js.map
