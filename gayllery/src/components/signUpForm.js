import React, { Component } from 'react';

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
          <p>Already a member? <a href='#'>Sign in!</a></p>
          <a href='#'>Don't Have an account?</a>
          </form>
     </div>
    )
  }
}

export default SignUpForm;