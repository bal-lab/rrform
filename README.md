# rrform
rrform (React Redux form) makes it easy to use forms with applications that use React and Redux.

Forms data is stored in Redux store and updated when user modifies data.
Data flow is like this: User modifies data in Form Control -> Data updated in Form store -> Form control updates

User can also subscribe to changes in Form store and trigger any desired actions.

To use it
1. User will have to combine 'formReducer' with his/her other reducers.
2. Provide 'id' attribute when creating form 
fields.
3. rrform adds onChange function to props. User should add `onChange={(e)=>{props.onChange("form1", "field2", e.target.value)}}` to form field.

## Example:

### File: App.js

```
import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { formReducer } from 'rrform';
import MyForm from './MyForm';

let rootReducer = combineReducers({
    rrforms: formReducer
})

let gStore = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class App extends Component {
  
  render() {
    return (
      <Provider store={gStore}>
      <div style={{textAlign: "center"}}>       
        <p>
          React Redux Form
        </p>

        <MyForm formId='my-form1' />

      </div>
      </Provider>
    );
  }
}

export default App;
```

### File: MyForm.tsx

```
import * as React from 'react';
import { connect } from 'react-redux';
import { rrform } from 'rrform';

export const MyForm = props => {
    let form1 = props['form1'] || {};
    return (
        <form id='form1'>
            <span>Field1:</span>
            <input id='field1' value={form1['field1']} onChange={(e)=>{props.onChange("form1", "field1", e.target.value)}} /> 
            <br/><br/>
            <span>Field2:</span>
            <input id='field2' value={form1['field2']} onChange={(e)=>{props.onChange("form1", "field2", e.target.value)}} /> 
            <br/><br/>
            <span>Field3:</span>
            <input id='field3' value={form1['field3']} onChange={(e)=>{props.onChange("form1", "field3", e.target.value)}} /> 
            <span>Field4:</span>
            <input id='field4' value={form1['field4']} onChange={(e)=>{props.onChange("form1", "field4", e.target.value)}} />
        </form>
    )
}

export default rrform(MyForm)
```

### File: index.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
```