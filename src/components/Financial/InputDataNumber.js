import React, { useState, Component } from 'react';
import '../../style/style.css'

function InputDataNumber (props) {
    function handleChange(event) {
        props.onChange(event.currentTarget.name,event.currentTarget.value);
    }
        
    return(
        <div className='Input-data'>
            <label>{props.label} </label>
            <input 
                type="numeric" 
                name= {props.name}
                value={props.value}
                onChange={handleChange}
            />
        </div>
    )    
}
export default InputDataNumber;