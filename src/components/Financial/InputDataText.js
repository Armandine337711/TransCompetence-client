import React, { useState, Component, useEffect } from 'react';
import '../../style/style.css'

function InputDataText (props) {
    const [id,  setId] = useState('');
    const [value, setValue] = useState('');
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setId(props.id);
        setName(props.name)
        setValue(event.currentTarget.value);
    }

    
    
useEffect(() => {
    fetch('https://transcompetence.herokuapp.com/financial_datas',
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"exercice_year": 2022})
    },
    )
        .then(response => response.json())
        .then(json => setValue(JSON.stringify(json)))
        .catch(error => console.log(error));
    }, []);

    return(
        <div className='Input-data'>
            <label>{props.label} </label>
            <input 
                type="Text" 
                onChange={handleChange}
            />
        </div>
    );
}
export default InputDataText;
