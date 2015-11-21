'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Bus = require('./event/Bus');

var _Bus2 = _interopRequireDefault(_Bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = (function () {
    _createClass(App, [{
        key: 'onDelayedStart',

        // override
        value: function onDelayedStart(startNow) {
            startNow();
        }
    }]);

    function App() {
        var _this = this;

        _classCallCheck(this, App);

        this.exportGlobals();

        var startPromise = new Promise(this.onDelayedStart);

        startPromise.then(function () {
            _this.startThru();
        });
    }

    _createClass(App, [{
        key: 'exportGlobals',
        value: function exportGlobals() {
            global.app = this;
        }
    }, {
        key: 'startThru',
        value: function startThru() {

            this.onStart();

            // fire event: App started
            _Bus2.default.emit('appStarted', this);
        }

        // override

    }, {
        key: 'onStart',
        value: function onStart() {}
    }]);

    return App;
})();

exports.default = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCLEdBQUc7aUJBQUgsR0FBRzs7Ozt1Q0FHTCxRQUFRLEVBQUU7QUFDckIsb0JBQVEsRUFBRSxDQUFDO1NBQ2Q7OztBQUVELGFBUGlCLEdBQUcsR0FPTjs7OzhCQVBHLEdBQUc7O0FBU2hCLFlBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7QUFFckIsWUFBSSxZQUFZLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDOztBQUVwRCxvQkFBWSxDQUFDLElBQUksQ0FBQyxZQUFNO0FBQ3BCLGtCQUFLLFNBQVMsRUFBRSxDQUFDO1NBQ3BCLENBQUMsQ0FBQztLQUNOOztpQkFoQmdCLEdBQUc7O3dDQWtCSjtBQUNaLGtCQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztTQUNyQjs7O29DQUVXOztBQUVSLGdCQUFJLENBQUMsT0FBTyxFQUFFOzs7QUFBQyxBQUdmLDBCQUFTLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDckM7Ozs7OztrQ0FHUyxFQUFFOzs7V0EvQkssR0FBRzs7O2tCQUFILEdBQUciLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2ZW50QnVzIGZyb20gJy4vZXZlbnQvQnVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIHtcblxuICAgIC8vIG92ZXJyaWRlXG4gICAgb25EZWxheWVkU3RhcnQoc3RhcnROb3cpIHtcbiAgICAgICAgc3RhcnROb3coKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICB0aGlzLmV4cG9ydEdsb2JhbHMoKTtcblxuICAgICAgICB2YXIgc3RhcnRQcm9taXNlID0gbmV3IFByb21pc2UodGhpcy5vbkRlbGF5ZWRTdGFydCk7XG5cbiAgICAgICAgc3RhcnRQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGFydFRocnUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwb3J0R2xvYmFscygpIHtcbiAgICAgICAgZ2xvYmFsLmFwcCA9IHRoaXM7XG4gICAgfVxuXG4gICAgc3RhcnRUaHJ1KCkge1xuXG4gICAgICAgIHRoaXMub25TdGFydCgpO1xuXG4gICAgICAgIC8vIGZpcmUgZXZlbnQ6IEFwcCBzdGFydGVkXG4gICAgICAgIEV2ZW50QnVzLmVtaXQoJ2FwcFN0YXJ0ZWQnLCB0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBvdmVycmlkZVxuICAgIG9uU3RhcnQoKSB7fVxufSJdfQ==
//# sourceMappingURL=App.js.map
