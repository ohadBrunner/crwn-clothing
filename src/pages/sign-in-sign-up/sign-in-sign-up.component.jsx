import React from 'react';

import '../../sass/app.scss';

import SignIn from '../../components/sign-in.component';
import SignUp from '../../components/sign-up.component';

const SignInSignUp = () => (
  <div className="sign-in-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUp;
