import React from 'react';

import './SignUp.scss';
import { auth, CreateUserProfileDocument } from '../../Firebase/Firebase';
import FormInput from '../Form-input/Form-input';
import CustomButton from '../CustomButton/CustomButton';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: "",
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Password don't match");
            return ; 
        } 
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await CreateUserProfileDocument(user, {displayName});
            
            // This also helps to clear up the form
            this.setState({
                displayName: "",
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch(error) {
            console.log(error)
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({[name]: value});
    }
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'> I do not have an account</h2>
                <span>Sign Up With Your Email and Password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required />
                    <CustomButton type="submit"> SIGN UP </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;