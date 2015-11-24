'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Injectable2 = require('../Injectable');

var _Injectable3 = _interopRequireDefault(_Injectable2);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

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
            return (0, _jquery2.default)(selector)[0];
        }
    }]);

    return DOMBind;
})(_Injectable3.default);

global.DOMBind = DOMBind;

exports.default = DOMBind;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRPTUJpbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR00sT0FBTztjQUFQLE9BQU87O0FBRVQsYUFGRSxPQUFPLEdBRUs7OEJBRlosT0FBTzs7c0VBQVAsT0FBTztLQUlSOztpQkFKQyxPQUFPOztpQ0FNQSxNQUFNLEVBQUU7O0FBRWIsZ0JBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUNoQixvQkFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3BCO1NBQ0o7Ozs2QkFFVyxRQUFRLEVBQUU7QUFDbEIsbUJBQU8sc0JBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekI7OztXQWZDLE9BQU87OztBQWtCYixNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7a0JBRVYsT0FBTyIsImZpbGUiOiJET01CaW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEluamVjdGFibGUgZnJvbSAnLi4vSW5qZWN0YWJsZSc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jbGFzcyBET01CaW5kIGV4dGVuZHMgSW5qZWN0YWJsZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkluamVjdCh0YXJnZXQpIHtcblxuICAgICAgICBpZiAodGhpcy5vbkRPTUJpbmQpIHtcbiAgICAgICAgICAgIHRoaXMub25ET01CaW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgYmluZChzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gJChzZWxlY3RvcilbMF07XG4gICAgfVxufVxuXG5nbG9iYWwuRE9NQmluZCA9IERPTUJpbmQ7XG5cbmV4cG9ydCBkZWZhdWx0IERPTUJpbmQ7Il19
//# sourceMappingURL=DOMBind.js.map
