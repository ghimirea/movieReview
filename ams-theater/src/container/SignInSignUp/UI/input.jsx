import React from 'react';

const input = (props) => {
    
   

    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                value={props.value}
                {...props.elementConfig}
                onChange={props.inputChanged}
            />
            break;
        case ('textarea'):
            inputElement = <textarea />
            break;
        default:
            inputElement = <input />

    }
    return (
        <div>
            <label >{props.label}</label>
            {inputElement}
        </div>


    );
}

export default input;