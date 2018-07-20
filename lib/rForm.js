var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';
import { connect } from 'react-redux';
import { ActionSetField } from './formActions';

export function rform(Form) {
    var mapStateToProps = function mapStateToProps(state) {
        return {
            props: _extends({}, state)
        };
    };
    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            onChange: function onChange(formId, fieldId, value) {
                return dispatch(ActionSetField(formId, fieldId, value));
            }
        };
    };

    var RForm1 = function (_React$Component) {
        _inherits(RForm1, _React$Component);

        function RForm1() {
            _classCallCheck(this, RForm1);

            return _possibleConstructorReturn(this, (RForm1.__proto__ || Object.getPrototypeOf(RForm1)).apply(this, arguments));
        }

        _createClass(RForm1, [{
            key: 'render',
            value: function render() {
                console.log(this.props);
                return React.createElement(Form, this.props);
            }
        }]);

        return RForm1;
    }(React.Component);

    return connect(mapStateToProps, mapDispatchToProps)(RForm1);
}