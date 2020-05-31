import React from 'react';

import './SignIn-SignUpPage.scss';
import SignIn from '../../Component/Sign-In/Sign-In';
import SignUp from '../../Component/SignUp/SignUp';

const SignInAndSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUp;