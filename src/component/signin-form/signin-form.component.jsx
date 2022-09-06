import React from 'react'
import './signin-form.style.css'
import InputForm from '../input-form/input-form.component';
import SubmitButton from '../submit-button/submit-button.component';
import {signInWithGoogle, auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import {signInWithEmailAndPassword} from 'firebase/auth'


class SignInForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit =  async (event) => {
        event.preventDefault();
        const {email, password} = this.state;
        try{
            await signInWithEmailAndPassword(auth, email, password);
            this.setState({ email: '', password: '' });
        }
        catch(error){
            console.log(error);
        }

      };
    
      handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };

    render(){
        return(
            <div className='signin-form'>

                    <h2>I already have an account</h2>
                    <span>Sign in with your email and password</span>

                    <form onSubmit={this.handleSubmit}>
            <InputForm
                name='email'
                type='email'
                handleChange={this.handleChange}
                value={this.state.email}
                label='email'
                required
            />
            <InputForm
                name='password'
                type='password'
                value={this.state.password}
                handleChange={this.handleChange}
                label='password'
                required
            />
        <div className='buttons'>
            <SubmitButton type='submit' > Sign in </SubmitButton>
            <SubmitButton onClick={signInWithGoogle} 
            isGoogleSignIn={true} > Sign in with Google</SubmitButton>

        </div>
          

        </form>

            </div>
        );
    }
}

export default SignInForm
