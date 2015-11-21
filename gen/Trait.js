'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Trait = (function () {
    function Trait() {
        _classCallCheck(this, Trait);
    }

    _createClass(Trait, null, [{
        key: 'inject',
        value: function inject(target, trait) {

            var targetPrototype;

            // class / constructor function given
            if (typeof target == 'function') {

                targetPrototype = target.prototype;
            } else {

                // instance given
                targetPrototype = target;
            }

            var traitMemberNames = Object.getOwnPropertyNames(trait.prototype);

            for (var i = 0; i < traitMemberNames.length; i++) {

                if (traitMemberNames[i] == 'constructor') continue;

                targetPrototype[traitMemberNames[i]] = trait.prototype[traitMemberNames[i]];
            }
            targetPrototype.onInject.call(targetPrototype);

            return target;
        }
    }]);

    return Trait;
})();

exports.default = Trait;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRyYWl0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBcUIsS0FBSzthQUFMLEtBQUs7OEJBQUwsS0FBSzs7O2lCQUFMLEtBQUs7OytCQUVSLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0FBRXpCLGdCQUFJLGVBQWU7OztBQUFDLEFBR3BCLGdCQUFJLE9BQU8sTUFBTSxJQUFJLFVBQVUsRUFBRTs7QUFFN0IsK0JBQWUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO2FBRXRDLE1BQU07OztBQUdILCtCQUFlLEdBQUcsTUFBTSxDQUFDO2FBQzVCOztBQUVELGdCQUFJLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7O0FBRW5FLGlCQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztBQUUxQyxvQkFBSSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxhQUFhLEVBQUUsU0FBUzs7QUFFbkQsK0JBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMvRTtBQUNELDJCQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzs7QUFFL0MsbUJBQU8sTUFBTSxDQUFDO1NBQ2pCOzs7V0E1QmdCLEtBQUs7OztrQkFBTCxLQUFLIiwiZmlsZSI6IlRyYWl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhaXQge1xuXG4gICAgc3RhdGljIGluamVjdCh0YXJnZXQsIHRyYWl0KSB7XG5cbiAgICAgICAgdmFyIHRhcmdldFByb3RvdHlwZTtcblxuICAgICAgICAvLyBjbGFzcyAvIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIGdpdmVuXG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09ICdmdW5jdGlvbicpIHtcblxuICAgICAgICAgICAgdGFyZ2V0UHJvdG90eXBlID0gdGFyZ2V0LnByb3RvdHlwZTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAvLyBpbnN0YW5jZSBnaXZlblxuICAgICAgICAgICAgdGFyZ2V0UHJvdG90eXBlID0gdGFyZ2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRyYWl0TWVtYmVyTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0cmFpdC5wcm90b3R5cGUpO1xuXG4gICAgICAgIGZvciAodmFyIGk9MDsgaTx0cmFpdE1lbWJlck5hbWVzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGlmICh0cmFpdE1lbWJlck5hbWVzW2ldID09ICdjb25zdHJ1Y3RvcicpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICB0YXJnZXRQcm90b3R5cGVbdHJhaXRNZW1iZXJOYW1lc1tpXV0gPSB0cmFpdC5wcm90b3R5cGVbdHJhaXRNZW1iZXJOYW1lc1tpXV07XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0UHJvdG90eXBlLm9uSW5qZWN0LmNhbGwodGFyZ2V0UHJvdG90eXBlKTtcblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cbn0iXX0=
//# sourceMappingURL=Trait.js.map
