import React from 'react'
import './input-form.style.css'



var cl = false
const InputForm = ({type, name, handleChange, label, value}) => {
    if (label && value.length){
        cl = true;
    }
    else{
        cl = false;
    }

    return (
        <div className='group'>
            <input className='form-input' name={name} type={type} onChange={handleChange} required>
           
            </input>
            {label ?
                <label className={` ${cl ? 'shrink': ''} form-input-label`}>{label}</label> : null}
        </div>
    );

} 

export default InputForm