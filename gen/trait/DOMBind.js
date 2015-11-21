'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Injectable2 = require('../Injectable');

var _Injectable3 = _interopRequireDefault(_Injectable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DOMBind = (function (_Injectable) {
    _inherits(DOMBind, _Injectable);

    function DOMBind() {
        _classCallCheck(this, DOMBind);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(DOMBind).call(this));
    }

    _createClass(DOMBind, [{
        key: 'onInject',
        value: function onInject(target) {

            if (this.onDOMBind) {
                this.onDOMBind();
            }
        }
    }], [{
        key: 'bind',
        value: function bind(selector) {

            if ($ || jQuery) {

                return ($ || jQuery)(selector)[0];
            } else if (document.querySelector) {

                return document.querySelector(selector);
            } else {

                throw new Error('No native browser support for selecting DOM elements available. Please include jQuery.');
            }
        }
    }]);

    return DOMBind;
})(_Injectable3.default);

global.DOMBind = DOMBind;

exports.default = DOMBind;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRPTUJpbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTSxPQUFPO2NBQVAsT0FBTzs7QUFFVCxhQUZFLE9BQU8sR0FFSzs4QkFGWixPQUFPOztzRUFBUCxPQUFPO0tBSVI7O2lCQUpDLE9BQU87O2lDQU1BLE1BQU0sRUFBRTs7QUFFYixnQkFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQ2hCLG9CQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDcEI7U0FDSjs7OzZCQUVXLFFBQVEsRUFBRTs7QUFFbEIsZ0JBQUksQ0FBQyxJQUFJLE1BQU0sRUFBRTs7QUFFYix1QkFBTyxDQUFDLENBQUMsSUFBRSxNQUFNLENBQUEsQ0FBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUVuQyxNQUFNLElBQUksUUFBUSxDQUFDLGFBQWEsRUFBRTs7QUFFL0IsdUJBQU8sUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUUzQyxNQUFNOztBQUVILHNCQUFNLElBQUksS0FBSyxDQUFDLHdGQUF3RixDQUFDLENBQUM7YUFDN0c7U0FDSjs7O1dBM0JDLE9BQU87OztBQThCYixNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7a0JBRVYsT0FBTyIsImZpbGUiOiJET01CaW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEluamVjdGFibGUgZnJvbSAnLi4vSW5qZWN0YWJsZSc7XG5cbmNsYXNzIERPTUJpbmQgZXh0ZW5kcyBJbmplY3RhYmxlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uSW5qZWN0KHRhcmdldCkge1xuXG4gICAgICAgIGlmICh0aGlzLm9uRE9NQmluZCkge1xuICAgICAgICAgICAgdGhpcy5vbkRPTUJpbmQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBiaW5kKHNlbGVjdG9yKSB7XG5cbiAgICAgICAgaWYgKCQgfHwgalF1ZXJ5KSB7XG5cbiAgICAgICAgICAgIHJldHVybiAoJHx8alF1ZXJ5KShzZWxlY3RvcilbMF07XG5cbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG5hdGl2ZSBicm93c2VyIHN1cHBvcnQgZm9yIHNlbGVjdGluZyBET00gZWxlbWVudHMgYXZhaWxhYmxlLiBQbGVhc2UgaW5jbHVkZSBqUXVlcnkuJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmdsb2JhbC5ET01CaW5kID0gRE9NQmluZDtcblxuZXhwb3J0IGRlZmF1bHQgRE9NQmluZDsiXX0=
//# sourceMappingURL=DOMBind.js.map
