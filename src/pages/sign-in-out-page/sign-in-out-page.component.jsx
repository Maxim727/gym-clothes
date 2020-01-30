import React from 'react';
import './sign-in-out-page.scss';
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sing-up/sign-up'

const SignInandSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
)


export default SignInandSignUpPage;