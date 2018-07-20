(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-redux')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-redux'], factory) :
    (factory((global.RRForm = {}),global.React,null));
}(this, (function (exports,React,reactRedux) { 'use strict';

    var FormActions = {
        SET_FIELD: "RRFORM_SET_FIELD",
        SET_FORM: "RRFORM_SET_FORM", //Replace existing data with supplied data
        COPY_FORM_FIELDS: "RRFORM_COPY_FORM_FIELDS", //copy only form fields from data
        COPY_ALL_FIELDS: "RRFORM_COPY_ALL_FIELDS", //copy all fields in data to form
        CLONE_SET_FORM: "RRFORM_CLONE_SET_FORM", //clone data and set form
        CLEAR_DIRTY: "RRFORM_CLEAR_DIRTY"
    };

    var actionSetField = function actionSetField(formId, fieldId, value) {
        return {
            type: FormActions.SET_FIELD,
            formId: formId,
            fieldId: fieldId,
            value: value
        };
    };

    var actionSetForm = function actionSetForm(formId, data) {
        return {
            type: FormActions.SET_FORM,
            formId: formId,
            data: data
        };
    };

    var actionCopyFormFields = function actionCopyFormFields(formId, data) {
        return {
            type: FormActions.COPY_FORM_FIELDS,
            formId: formId,
            data: data
        };
    };

    var actionCopyAllFields = function actionCopyAllFields(formId, data) {
        return {
            type: FormActions.COPY_ALL_FIELDS,
            formId: formId,
            data: data
        };
    };

    var actionCloneAndSetForm = function actionCloneAndSetForm(formId, data) {
        return {
            type: FormActions.CLONE_SET_FORM,
            formId: formId,
            data: data
        };
    };

    var actionClearDirty = function actionClearDirty(formId) {
        return {
            type: FormActions.CLEAR_DIRTY,
            formId: formId
        };
    };

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    /*
    Get field value from an object.
    Field name could be of form abc_xyz_123
    then obj[abc][xyz][123] woul be returned
    */
    function setFieldValue(form, fieldId, value) {
        if (form) {

            try {
                var fieldIdArray = fieldId.split("_");
                if (fieldIdArray.length == 1) {
                    form[fieldIdArray[0]] = value;
                } else if (fieldIdArray.length == 2) {
                    form[fieldIdArray[0]][fieldIdArray[1]] = value;
                } else if (fieldIdArray.length == 3) {
                    form[fieldIdArray[0]][fieldIdArray[1]][fieldIdArray[2]] = value;
                } else if (fieldIdArray.length == 4) {
                    form[fieldIdArray[0]][fieldIdArray[1]][fieldIdArray[2]][fieldIdArray[3]] = value;
                } else if (fieldIdArray.length == 5) {
                    form[fieldIdArray[0]][fieldIdArray[1]][fieldIdArray[2]][fieldIdArray[3]][fieldIdArray[4]] = value;
                }
            } catch (e) {
                console.log("rrform: formReducer: setFieldValue: Undefined field in form " + fieldId);
            }
        }
    }

    var formReducer = function formReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments[1];


        var form = state[action.formId] || {};

        try {
            switch (action.type) {
                case FormActions.SET_FIELD:
                    setFieldValue(form, action.fieldId, action.value);
                    form.rrFormDirty = true;
                    form.rrFormChangedFields = form.rrFormChangedFields || {};
                    form.rrFormChangedFields[action.fieldId] = "";
                    state[action.formId] = _extends({}, form);
                    return _extends({}, state);
                case FormActions.SET_FORM:
                    {
                        var s = _extends({}, state);
                        s[action.formId] = action.data;
                        return s;
                    }
                case FormActions.COPY_FORM_FIELDS:
                    {
                        var data = action.data || {};
                        for (var key in form) {
                            if (data[key] != undefined && data.hasOwnProperty(key)) {
                                form[key] = data[key];
                            }
                        }
                        state[action.formId] = form;
                        return _extends({}, state);
                    }
                case FormActions.COPY_ALL_FIELDS:
                    {
                        var _data = action.data || {};
                        for (var key in _data) {
                            if (_data[key] != undefined && _data.hasOwnProperty(key)) {
                                form[key] = _data[key];
                            }
                        }
                        state[action.formId] = _extends({}, form);
                        return _extends({}, state);
                    }
                case FormActions.CLONE_SET_FORM:
                    {
                        state[action.formId] = action.data;
                        return _extends({}, state);
                    }
                case FormActions.CLEAR_DIRTY:
                    {
                        form.rrFormDirty = false;
                        form.rrFormChangedFields = {};
                        state[action.formId] = form;
                        return _extends({}, state);
                    }
                default:
                    return state;
            }
        } catch (e) {
            console.log("rrform: formReducer: formReducer: Invalid action/from supplied to reducer");
            console.log("action: " + action);
            console.log("form: " + form);
        }
    };

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function rrform(Form) {
        var mapStateToProps = function mapStateToProps(state) {
            return {
                rrforms: _extends$1({}, state.rrforms)
            };
        };
        var mapDispatchToProps = function mapDispatchToProps(dispatch) {
            return {
                onChange: function onChange(formId, fieldId, value) {
                    return dispatch(actionSetField(formId, fieldId, value));
                },
                setForm: function setForm(formId, data) {
                    return dispatch(actionSetForm(formId, data));
                },
                cloneSetForm: function cloneSetForm(formId, data) {
                    return dispatch(actionCloneAndSetForm(formId, data));
                },
                copyAllFields: function copyAllFields(formId, data) {
                    return dispatch(actionCopyAllFields(formId, data));
                },
                copyFormFields: function copyFormFields(formId, data) {
                    return dispatch(actionCopyFormFields(formId, data));
                },
                clearDirty: function clearDirty(formId) {
                    return dispatch(actionClearDirty(formId));
                }
            };
        };

        var RRForm = function (_React$Component) {
            _inherits(RRForm, _React$Component);

            function RRForm() {
                _classCallCheck(this, RRForm);

                return _possibleConstructorReturn(this, (RRForm.__proto__ || Object.getPrototypeOf(RRForm)).apply(this, arguments));
            }

            _createClass(RRForm, [{
                key: 'render',
                value: function render() {
                    return React.createElement(Form, this.props);
                }
            }]);

            return RRForm;
        }(React.Component);

        return reactRedux.connect(mapStateToProps, mapDispatchToProps)(RRForm);
    }

    exports.formReducer = formReducer;
    exports.rrform = rrform;
    exports.actionSetForm = actionSetForm;
    exports.actionCopyFormFields = actionCopyFormFields;
    exports.actionCopyAllFields = actionCopyAllFields;
    exports.actionCloneAndSetForm = actionCloneAndSetForm;
    exports.actionClearDirty = actionClearDirty;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
