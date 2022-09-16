import React from 'react'
import './input-form.style.css'




const InputForm = ({type, name, handleChange, label, value}) => {
  
    return (
        <div className='group'>
            <input  className='form-input' name={name} type={type} onChange={handleChange} required>
           
            </input>
            {label ?
                <label className={`shrink form-input-label`}>{label}</label> : null}
        </div>
    );

} 

export default InputForm