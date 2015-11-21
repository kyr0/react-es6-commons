'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _Observable2 = require('./Observable');

var _Observable3 = _interopRequireDefault(_Observable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bus = (function (_Observable) {
   _inherits(Bus, _Observable);

   function Bus() {
      _classCallCheck(this, Bus);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Bus).apply(this, arguments));
   }

   return Bus;
})(_Observable3.default);

// NOP

if (!global.EventBus) {
   global.EventBus = new Bus();
}
exports.default = global.EventBus;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTSxHQUFHO2FBQUgsR0FBRzs7WUFBSCxHQUFHOzRCQUFILEdBQUc7O29FQUFILEdBQUc7OztVQUFILEdBQUc7Ozs7O0FBSVQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7QUFDbEIsU0FBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0NBQy9CO2tCQUNjLE1BQU0sQ0FBQyxRQUFRIiwiZmlsZSI6IkJ1cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPYnNlcnZhYmxlIGZyb20gJy4vT2JzZXJ2YWJsZSc7XG5cbmNsYXNzIEJ1cyBleHRlbmRzIE9ic2VydmFibGUge1xuICAgLy8gTk9QXG59XG5cbmlmICghZ2xvYmFsLkV2ZW50QnVzKSB7XG4gICAgZ2xvYmFsLkV2ZW50QnVzID0gbmV3IEJ1cygpO1xufVxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsLkV2ZW50QnVzO1xuIl19
//# sourceMappingURL=Bus.js.map
