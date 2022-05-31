import React, { useState, Component } from 'react';
import '../../style/style.css'

function InputDataText (props) {
    const [label, setLabel] = useState('');
    const [id,  setId] = useState('');
    const [value, setValue] = useState('');

    return(
        <div className='Input-data'>
            <label>{props.label} </label>
            <input 
                type="Text" 
                onChange={event => setValue(event.target.value)}
            />
        </div>
    );
}
export default InputDataText;
