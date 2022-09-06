import React from "react";
import './submit-button.style.css'


const SubmitButton = ({children, isGoogleSignIn,inverted,  ...otherProps }) => {
    return (
             <button className={`${inverted ? 'inverted' : '' } ${isGoogleSignIn ? 'google-sign-in' : '' } custom-button` } {...otherProps}>
                {children}
          </button>
             
    );
}

export default SubmitButton;