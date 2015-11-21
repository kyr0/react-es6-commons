'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Bus = require('./event/Bus');

var _Bus2 = _interopRequireDefault(_Bus);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Trait = require('./Trait');

var _Trait2 = _interopRequireDefault(_Trait);

var _DOMBind = require('./trait/DOMBind');

var _DOMBind2 = _interopRequireDefault(_DOMBind);

var _jss = require('jss');

var _jssCamelCase = require('jss-camel-case');

var _jssCamelCase2 = _interopRequireDefault(_jssCamelCase);

var _jssVendorPrefixer = require('jss-vendor-prefixer');

var _jssVendorPrefixer2 = _interopRequireDefault(_jssVendorPrefixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// JSS stylesheets
var jss = (0, _jss.create)();
jss.use(_jssVendorPrefixer2.default);
jss.use(_jssCamelCase2.default);

// e.g. extend React.Component

var Component = (function (_React$Component) {
    _inherits(Component, _React$Component);

    function Component(props) {
        _classCallCheck(this, Component);

        // eager DOMBind

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Component).call(this, props));

        _Trait2.default.inject(_this, _DOMBind2.default);
        return _this;
    }

    _createClass(Component, [{
        key: 'componentWillMount',
        value: function componentWillMount() {

            // late DOMBind
            if (this.onDOMBind) {
                this.onDOMBind();
            }
        }
    }, {
        key: '_createStylesheet',
        value: function _createStylesheet() {

            if (this.stylesheet && !this._styleSheetApplied) {

                this.stylesheet = jss.createStyleSheet(this.stylesheet);
                this.stylesheet.attach();

                this._styleSheetApplied = true;
            }

            if (this.stylesheet && this.stylesheet.classes) {
                return this.stylesheet;
            }
        }
    }, {
        key: '_getDefaultJSX',
        value: function _getDefaultJSX() {
            return _react2.default.createElement(
                'strong',
                null,
                'Warning: The "template" property is missing in a View extending Component.'
            );
        }
    }, {
        key: 'render',
        value: function render() {

            // JSS processing
            var jssClasses,
                stylesheet = this._createStylesheet();

            if (stylesheet) {
                jssClasses = stylesheet.classes;
            }

            var tpl = this.template,
                args = [this.state || {}, jssClasses || {}, this.translation || {}];

            if (!tpl) {
                tpl = this._getDefaultJSX;
            }
            return tpl.bind(this).apply(this, args);
        }
    }]);

    return Component;
})(_react2.default.Component);

exports.default = Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBSSxHQUFHLEdBQUcsU0FMRCxNQUFNLEdBS0csQ0FBQztBQUNuQixHQUFHLENBQUMsR0FBRyw2QkFBZ0IsQ0FBQztBQUN4QixHQUFHLENBQUMsR0FBRyx3QkFBVzs7O0FBQUM7SUFHRSxTQUFTO2NBQVQsU0FBUzs7QUFFMUIsYUFGaUIsU0FBUyxDQUVkLEtBQUssRUFBRTs4QkFGRixTQUFTOzs7OzJFQUFULFNBQVMsYUFJaEIsS0FBSzs7QUFHWCx3QkFBTSxNQUFNLDBCQUFlLENBQUM7O0tBQy9COztpQkFSZ0IsU0FBUzs7NkNBVUw7OztBQUdqQixnQkFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQ2hCLG9CQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDcEI7U0FDSjs7OzRDQUVtQjs7QUFFaEIsZ0JBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTs7QUFFN0Msb0JBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN4RCxvQkFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7QUFFekIsb0JBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7YUFDbEM7O0FBRUQsZ0JBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtBQUM1Qyx1QkFBTyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQzFCO1NBQ0o7Ozt5Q0FFZ0I7QUFDYixtQkFBTzs7OzthQUEyRixDQUFDO1NBQ3RHOzs7aUNBRVE7OztBQUlMLGdCQUFJLFVBQVU7Z0JBQ1YsVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDOztBQUUxQyxnQkFBSSxVQUFVLEVBQUU7QUFDWiwwQkFBVSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUM7YUFDbkM7O0FBRUQsZ0JBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRO2dCQUNuQixJQUFJLEdBQUcsQ0FDSCxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFDaEIsVUFBVSxJQUFJLEVBQUUsRUFDaEIsSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQ3pCLENBQUM7O0FBRU4sZ0JBQUksQ0FBQyxHQUFHLEVBQUU7QUFDTixtQkFBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUE7YUFDNUI7QUFDRCxtQkFBTyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDM0M7OztXQTNEZ0IsU0FBUztHQUFTLGdCQUFNLFNBQVM7O2tCQUFqQyxTQUFTIiwiZmlsZSI6IkNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFdmVudEJ1cyBmcm9tICcuL2V2ZW50L0J1cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4vVHJhaXQnO1xuaW1wb3J0IERPTUJpbmQgZnJvbSAnLi90cmFpdC9ET01CaW5kJztcblxuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnanNzJ1xuaW1wb3J0IGNhbWVsQ2FzZSBmcm9tICdqc3MtY2FtZWwtY2FzZSc7XG5pbXBvcnQgdmVuZG9yUHJlZml4ZXIgZnJvbSAnanNzLXZlbmRvci1wcmVmaXhlcidcblxuLy8gSlNTIHN0eWxlc2hlZXRzXG52YXIganNzID0gY3JlYXRlKCk7XG5qc3MudXNlKHZlbmRvclByZWZpeGVyKTtcbmpzcy51c2UoY2FtZWxDYXNlKTtcblxuLy8gZS5nLiBleHRlbmQgUmVhY3QuQ29tcG9uZW50XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcblxuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgLy8gZWFnZXIgRE9NQmluZFxuICAgICAgICBUcmFpdC5pbmplY3QodGhpcywgRE9NQmluZCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gICAgICAgIC8vIGxhdGUgRE9NQmluZFxuICAgICAgICBpZiAodGhpcy5vbkRPTUJpbmQpIHtcbiAgICAgICAgICAgIHRoaXMub25ET01CaW5kKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgX2NyZWF0ZVN0eWxlc2hlZXQoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuc3R5bGVzaGVldCAmJiAhdGhpcy5fc3R5bGVTaGVldEFwcGxpZWQpIHtcblxuICAgICAgICAgICAgdGhpcy5zdHlsZXNoZWV0ID0ganNzLmNyZWF0ZVN0eWxlU2hlZXQodGhpcy5zdHlsZXNoZWV0KTtcbiAgICAgICAgICAgIHRoaXMuc3R5bGVzaGVldC5hdHRhY2goKTtcblxuICAgICAgICAgICAgdGhpcy5fc3R5bGVTaGVldEFwcGxpZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3R5bGVzaGVldCAmJiB0aGlzLnN0eWxlc2hlZXQuY2xhc3Nlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGVzaGVldDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9nZXREZWZhdWx0SlNYKCkge1xuICAgICAgICByZXR1cm4gPHN0cm9uZz5XYXJuaW5nOiBUaGUgXCJ0ZW1wbGF0ZVwiIHByb3BlcnR5IGlzIG1pc3NpbmcgaW4gYSBWaWV3IGV4dGVuZGluZyBDb21wb25lbnQuPC9zdHJvbmc+O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuXG4gICAgICAgIC8vIEpTUyBwcm9jZXNzaW5nXG4gICAgICAgIHZhciBqc3NDbGFzc2VzLFxuICAgICAgICAgICAgc3R5bGVzaGVldCA9IHRoaXMuX2NyZWF0ZVN0eWxlc2hlZXQoKTtcblxuICAgICAgICBpZiAoc3R5bGVzaGVldCkge1xuICAgICAgICAgICAganNzQ2xhc3NlcyA9IHN0eWxlc2hlZXQuY2xhc3NlcztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0cGwgPSB0aGlzLnRlbXBsYXRlLFxuICAgICAgICAgICAgYXJncyA9IFtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlIHx8IHt9LFxuICAgICAgICAgICAgICAgIGpzc0NsYXNzZXMgfHwge30sXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGlvbiB8fCB7fVxuICAgICAgICAgICAgXTtcblxuICAgICAgICBpZiAoIXRwbCkge1xuICAgICAgICAgICAgdHBsID0gdGhpcy5fZ2V0RGVmYXVsdEpTWFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cGwuYmluZCh0aGlzKS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG59Il19
//# sourceMappingURL=Component.js.map
