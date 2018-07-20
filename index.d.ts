export function formReducer(): {};
export function rrform(c: any): any;
export function actionSetForm(formId: string, data: any): any;
export function actionCopyFormFields(formId: string, data: any): any;
export function actionCopyAllFields(formId: string, data: any): any;
export function actionCloneAndSetForm(formId: string, data: any): any;
export function actionClearDirty(formId: string): any;

/*These properties are passed to component*/
export interface IRRFormProps {
    rrforms: any;
    onChange(formId: string, fieldId: string, value: any): void;
    setForm(formId: string, data: any): void;
    cloneSetForm(formId: string, data: any): void;
    copyAllFields(formId: string, data: any): void;
    copyFormFields(formId: string, data: any): void;
    clearDirty(formId: string): void; 
}

/*These poperties are available in rrforms*/
export interface IRRForm {
    rrFormDirty?: boolean;
    rrFormChangedFields?: string[];
}