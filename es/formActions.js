export var FormActions = {
    SET_FIELD: "RRFORM_SET_FIELD",
    SET_FORM: "RRFORM_SET_FORM", //Replace existing data with supplied data
    COPY_FORM_FIELDS: "RRFORM_COPY_FORM_FIELDS", //copy only form fields from data
    COPY_ALL_FIELDS: "RRFORM_COPY_ALL_FIELDS", //copy all fields in data to form
    CLONE_SET_FORM: "RRFORM_CLONE_SET_FORM", //clone data and set form
    CLEAR_DIRTY: "RRFORM_CLEAR_DIRTY"
};

export var actionSetField = function actionSetField(formId, fieldId, value) {
    return {
        type: FormActions.SET_FIELD,
        formId: formId,
        fieldId: fieldId,
        value: value
    };
};

export var actionSetForm = function actionSetForm(formId, data) {
    return {
        type: FormActions.SET_FORM,
        formId: formId,
        data: data
    };
};

export var actionCopyFormFields = function actionCopyFormFields(formId, data) {
    return {
        type: FormActions.COPY_FORM_FIELDS,
        formId: formId,
        data: data
    };
};

export var actionCopyAllFields = function actionCopyAllFields(formId, data) {
    return {
        type: FormActions.COPY_ALL_FIELDS,
        formId: formId,
        data: data
    };
};

export var actionCloneAndSetForm = function actionCloneAndSetForm(formId, data) {
    return {
        type: FormActions.CLONE_SET_FORM,
        formId: formId,
        data: data
    };
};

export var actionClearDirty = function actionClearDirty(formId) {
    return {
        type: FormActions.CLEAR_DIRTY,
        formId: formId
    };
};