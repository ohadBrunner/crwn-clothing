import React, { Component } from 'react';

import FormInput from './form-input.component';
import CustomButton from './custom-button.component';

import { auth, signInWithGoogle } from '../firebase/firebase.utils';

import '../sass/app.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    // getting what the user typed in
    const { email, password } = this.state;

    try {
      // checking those details to see if firebase know this user
      await auth.signInWithEmailAndPassword(email, password);
      // clean up the state
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
    // clean up the state regardless of success/failure
    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    // getting the current values from the input fields
    const { value, name } = event.target;

    // setting those values to the state
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />

          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
