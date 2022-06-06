import React, { useState, Component, useEffect } from 'react';
import '../../style/style.css'

const InputDataText = (props) =>{
    
    function handleChange(event) {
        props.onChange(event.currentTarget.name,event.currentTarget.value);
    }
    return(
        
        <div className='Input-data'>
            <label>{props.label} </label>
            <input 
                type="Text" 
                name= {props.name}
                value={props.value}
                onChange={handleChange}
            />
        </div>
    );
}
export default InputDataText;