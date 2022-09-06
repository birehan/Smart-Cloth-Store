import React from 'react'
import './signin.style.css'
import SignInForm from '../../component/signin-form/signin-form.component'
import SignUpForm from '../../component/signup-form/signup-form-component'

const SignIn = () =>{
    return(
        <div className='signin'>
        <SignInForm />
        <SignUpForm />
    </div>
    );
}

export default SignIn