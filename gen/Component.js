'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Bus = require('./event/Bus');

var _Bus2 = _interopRequireDefault(_Bus);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Trait = require('./Trait');

var _Trait2 = _interopRequireDefault(_Trait);

var _DOMBind = require('./trait/DOMBind');

var _DOMBind2 = _interopRequireDefault(_DOMBind);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

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
        key: '$',
        value: function $(selector) {
            return (0, _jquery2.default)(selector, _reactDom2.default.findDOMNode(this));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQSxJQUFJLEdBQUcsR0FBRyxTQUxELE1BQU0sR0FLRyxDQUFDO0FBQ25CLEdBQUcsQ0FBQyxHQUFHLDZCQUFnQixDQUFDO0FBQ3hCLEdBQUcsQ0FBQyxHQUFHLHdCQUFXOzs7QUFBQztJQUdFLFNBQVM7Y0FBVCxTQUFTOztBQUUxQixhQUZpQixTQUFTLENBRWQsS0FBSyxFQUFFOzhCQUZGLFNBQVM7Ozs7MkVBQVQsU0FBUyxhQUloQixLQUFLOztBQUdYLHdCQUFNLE1BQU0sMEJBQWUsQ0FBQzs7S0FDL0I7O2lCQVJnQixTQUFTOzs2Q0FVTDs7O0FBR2pCLGdCQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDaEIsb0JBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNwQjtTQUNKOzs7NENBRW1COztBQUVoQixnQkFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFOztBQUU3QyxvQkFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3hELG9CQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDOztBQUV6QixvQkFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQzthQUNsQzs7QUFFRCxnQkFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO0FBQzVDLHVCQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDMUI7U0FDSjs7O3lDQUVnQjtBQUNiLG1CQUFPOzs7O2FBQTJGLENBQUM7U0FDdEc7OzswQkFFQyxRQUFRLEVBQUU7QUFDUixtQkFBTyxzQkFBTyxRQUFRLEVBQUUsbUJBQVMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDdkQ7OztpQ0FFUTs7O0FBSUwsZ0JBQUksVUFBVTtnQkFDVixVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7O0FBRTFDLGdCQUFJLFVBQVUsRUFBRTtBQUNaLDBCQUFVLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQzthQUNuQzs7QUFFRCxnQkFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVE7Z0JBQ25CLElBQUksR0FBRyxDQUNILElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxFQUNoQixVQUFVLElBQUksRUFBRSxFQUNoQixJQUFJLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FDekIsQ0FBQzs7QUFFTixnQkFBSSxDQUFDLEdBQUcsRUFBRTtBQUNOLG1CQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQTthQUM1QjtBQUNELG1CQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUMzQzs7O1dBL0RnQixTQUFTO0dBQVMsZ0JBQU0sU0FBUzs7a0JBQWpDLFNBQVMiLCJmaWxlIjoiQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2ZW50QnVzIGZyb20gJy4vZXZlbnQvQnVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBUcmFpdCBmcm9tICcuL1RyYWl0JztcbmltcG9ydCBET01CaW5kIGZyb20gJy4vdHJhaXQvRE9NQmluZCc7XG5pbXBvcnQgalF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5cbmltcG9ydCB7IGNyZWF0ZSB9IGZyb20gJ2pzcydcbmltcG9ydCBjYW1lbENhc2UgZnJvbSAnanNzLWNhbWVsLWNhc2UnO1xuaW1wb3J0IHZlbmRvclByZWZpeGVyIGZyb20gJ2pzcy12ZW5kb3ItcHJlZml4ZXInXG5cbi8vIEpTUyBzdHlsZXNoZWV0c1xudmFyIGpzcyA9IGNyZWF0ZSgpO1xuanNzLnVzZSh2ZW5kb3JQcmVmaXhlcik7XG5qc3MudXNlKGNhbWVsQ2FzZSk7XG5cbi8vIGUuZy4gZXh0ZW5kIFJlYWN0LkNvbXBvbmVudFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIC8vIGVhZ2VyIERPTUJpbmRcbiAgICAgICAgVHJhaXQuaW5qZWN0KHRoaXMsIERPTUJpbmQpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuICAgICAgICAvLyBsYXRlIERPTUJpbmRcbiAgICAgICAgaWYgKHRoaXMub25ET01CaW5kKSB7XG4gICAgICAgICAgICB0aGlzLm9uRE9NQmluZCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIF9jcmVhdGVTdHlsZXNoZWV0KCkge1xuXG4gICAgICAgIGlmICh0aGlzLnN0eWxlc2hlZXQgJiYgIXRoaXMuX3N0eWxlU2hlZXRBcHBsaWVkKSB7XG5cbiAgICAgICAgICAgIHRoaXMuc3R5bGVzaGVldCA9IGpzcy5jcmVhdGVTdHlsZVNoZWV0KHRoaXMuc3R5bGVzaGVldCk7XG4gICAgICAgICAgICB0aGlzLnN0eWxlc2hlZXQuYXR0YWNoKCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3N0eWxlU2hlZXRBcHBsaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0eWxlc2hlZXQgJiYgdGhpcy5zdHlsZXNoZWV0LmNsYXNzZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0eWxlc2hlZXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfZ2V0RGVmYXVsdEpTWCgpIHtcbiAgICAgICAgcmV0dXJuIDxzdHJvbmc+V2FybmluZzogVGhlIFwidGVtcGxhdGVcIiBwcm9wZXJ0eSBpcyBtaXNzaW5nIGluIGEgVmlldyBleHRlbmRpbmcgQ29tcG9uZW50Ljwvc3Ryb25nPjtcbiAgICB9XG5cbiAgICAkKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBqUXVlcnkoc2VsZWN0b3IsIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cblxuICAgICAgICAvLyBKU1MgcHJvY2Vzc2luZ1xuICAgICAgICB2YXIganNzQ2xhc3NlcyxcbiAgICAgICAgICAgIHN0eWxlc2hlZXQgPSB0aGlzLl9jcmVhdGVTdHlsZXNoZWV0KCk7XG5cbiAgICAgICAgaWYgKHN0eWxlc2hlZXQpIHtcbiAgICAgICAgICAgIGpzc0NsYXNzZXMgPSBzdHlsZXNoZWV0LmNsYXNzZXM7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdHBsID0gdGhpcy50ZW1wbGF0ZSxcbiAgICAgICAgICAgIGFyZ3MgPSBbXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSB8fCB7fSxcbiAgICAgICAgICAgICAgICBqc3NDbGFzc2VzIHx8IHt9LFxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRpb24gfHwge31cbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgaWYgKCF0cGwpIHtcbiAgICAgICAgICAgIHRwbCA9IHRoaXMuX2dldERlZmF1bHRKU1hcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHBsLmJpbmQodGhpcykuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxufSJdfQ==
//# sourceMappingURL=Component.js.map
