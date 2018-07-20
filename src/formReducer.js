import {
    FormActions
} from './formActions';

/*
Get field value from an object.
Field name could be of form abc_xyz_123
then obj[abc][xyz][123] would be returned
*/
function setFieldValue(form, fieldId, value) {
    if (form) {

        try {
            let fieldIdArray = fieldId.split("_");
            if (fieldIdArray.length == 1) {
                form[fieldIdArray[0]] = value;
            } else if (fieldIdArray.length == 2) {
                form[fieldIdArray[0]]
                    [fieldIdArray[1]] = value;
            } else if (fieldIdArray.length == 3) {
                form[fieldIdArray[0]]
                    [fieldIdArray[1]]
                    [fieldIdArray[2]] = value;
            } else if (fieldIdArray.length == 4) {
                form[fieldIdArray[0]]
                    [fieldIdArray[1]]
                    [fieldIdArray[2]]
                    [fieldIdArray[3]] = value;
            } else if (fieldIdArray.length == 5) {
                form[fieldIdArray[0]]
                    [fieldIdArray[1]]
                    [fieldIdArray[2]]
                    [fieldIdArray[3]]
                    [fieldIdArray[4]] = value;
            }
        } catch (e) {
            console.log("rrform: formReducer: setFieldValue: Undefined field in form " + fieldId)
        }
    }
}

export var formReducer = (state = {}, action) => {

    let form = state[action.formId] || {};

    try {
        switch (action.type) {
            case FormActions.SET_FIELD:
                setFieldValue(form, action.fieldId, action.value);
                form.rrFormDirty = true;
                form.rrFormChangedFields = form.rrFormChangedFields || {};
                form.rrFormChangedFields[action.fieldId] = "";
                state[action.formId] = { ...form
                };
                return { ...state
                };
            case FormActions.SET_FORM:
                {
                    let s = { ...state
                    }
                    s[action.formId] = action.data;
                    return s;
                }
            case FormActions.COPY_FORM_FIELDS:
                {
                    let data = action.data || {};
                    for (var key in form) {
                        if (data[key] != undefined && data.hasOwnProperty(key)) {
                            form[key] = data[key];
                        }
                    }
                    state[action.formId] = form;
                    return { ...state
                    };
                }
            case FormActions.COPY_ALL_FIELDS:
                {
                    let data = action.data || {};
                    for (var key in data) {
                        if (data[key] != undefined && data.hasOwnProperty(key)) {
                            form[key] = data[key];
                        }
                    }
                    state[action.formId] = {...form};
                    return { ...state
                    };
                }
            case FormActions.CLONE_SET_FORM:
                {
                    state[action.formId] = action.data;
                    return { ...state
                    };
                }
            case FormActions.CLEAR_DIRTY:
                {
                    form.rrFormDirty = false;
                    form.rrFormChangedFields = {};
                    state[action.formId] = form;
                    return { ...state
                    };
                }
            default:
                return state;
        }
    } catch (e) {
        console.log("rrform: formReducer: formReducer: Invalid action/from supplied to reducer");
        console.log("action: " + action);
        console.log("form: " + form);
    }
}
