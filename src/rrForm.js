import * as React from 'react';
import {
    connect
} from 'react-redux';
import {
    actionSetField,
    actionSetForm,
    actionCloneAndSetForm,
    actionCopyAllFields,
    actionCopyFormFields,
    actionClearDirty
} from './formActions';

export function rrform(Form) {
    const mapStateToProps = (state) => ({
        rrforms: { ...state.rrforms }
    });
    const mapDispatchToProps = (dispatch) => ({
        onChange: (formId, fieldId, value) => dispatch(actionSetField(formId, fieldId, value)),
        setForm: (formId, data) => dispatch(actionSetForm(formId, data)),
        cloneSetForm: (formId, data) => dispatch(actionCloneAndSetForm(formId, data)),
        copyAllFields: (formId, data) => dispatch(actionCopyAllFields(formId, data)),
        copyFormFields: (formId, data) => dispatch(actionCopyFormFields(formId, data)),
        clearDirty: (formId) => dispatch(actionClearDirty(formId))
    });
    class RRForm extends React.Component {
        render() {
            return <Form { ...this.props} />;
        }
    }
    return connect(mapStateToProps, mapDispatchToProps)(RRForm);
}