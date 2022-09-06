import React from 'react'
import './signup-form.style.css'
import InputForm from '../input-form/input-form.component';
import SubmitButton from '../submit-button/submit-button.component';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import {createUserWithEmailAndPassword} from 'firebase/auth'

class SignUpForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;


        if (password != confirmPassword){
            alert("password don't match");
            return 
        }
        try {
            const {user} = await createUserWithEmailAndPassword(auth,email, password)
            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }
        catch(error){
            console.error(error);
        }


    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='signup-form'>
                
                    <h2 className='title'>I do not have a account</h2>
                    <span>Sign up with your email and password</span>

                    <form className='sign-up-form' onSubmit={this.handleSubmit}>
            <InputForm
                name='displayName'
                type='text'
                handleChange={this.handleChange}
                value={displayName}
                label='Display Name'
                required
            /> 
            <InputForm
                name='email'
                type='email'
                handleChange={this.handleChange}
                value={email}
                label='Email'
                required
            />
            <InputForm
                name='password'
                type='password'
                value={password}
                handleChange={this.handleChange}
                label='password'
                required
            />
              <InputForm
                name='confirmPassword'
                type='password'
                value={confirmPassword}
                handleChange={this.handleChange}
                label='Confirm Password'
                required
            />
            <SubmitButton type='submit' > Sign up </SubmitButton>
        
        </form>
            </div>
        );
    }
}

export default SignUpForm
