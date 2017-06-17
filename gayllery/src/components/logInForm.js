import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class LogInForm extends Component{
  render(){
    return(
      <form>
        <input type='text' placeholder='username'/>
        <input type='password' placeholder='password'/>
        <button>Log In</button>
        <Link to='/sign-up'>Don't have an account?</Link>
      </form>
    )
  }
}

export default LogInForm;