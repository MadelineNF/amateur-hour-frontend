import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class SignUpForm extends Component{
  render(){
    return(
      <div>
        <h1>Become a Member!</h1>
        <form>
          <input type='text' placeholder='username'/>
          <input type='password' placeholder='password'/>
          <input type='email' placeholder = 'email'/>
          <input type='text' placeholder = 'First Name'/>
          <input type='text' placeholder = 'Last Name'/>
          <p>Already a member? <Link to="/">Sign in!</Link></p>
          </form>
     </div>
    )
  }
}

export default SignUpForm;