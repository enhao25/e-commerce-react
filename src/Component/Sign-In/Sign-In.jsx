import React from 'react';

import './Sign-In.scss'
import FormInput from '../Form-input/Form-input';
import CustomButton from '../CustomButton/CustomButton';
import { signInWithGoogle } from '../../Firebase/Firebase';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleEvent = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({[name]: value})
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your own password</span>
                <form onSubmit={this.handleEvent}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        handleChange={this.handleChange} 
                        value={this.state.email}
                        label= "email" 
                        required />
                    <FormInput 
                        name="password" 
                        type="password" 
                        handleChange={this.handleChange} 
                        value={this.state.password} 
                        label = "password"
                        required />
                    <div className="buttons">
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;