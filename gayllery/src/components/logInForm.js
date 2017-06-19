import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class LogInForm extends Component{
  render(){
    const inputStyle = {
      background: '#fff',
      color: '#333',
      padding: '8px 0px 10px 5px',
      margin:'10px',
      borderRadius: '5px 0px 0px 5px',
    }
    const buttonStyle = {
    display: 'inline-block',
    color: 'white',
  
    width: '80px',
    height: '40px',
  
    padding: '0 20px',
    background: '#374142',
    borderRadius: '5px',
    
    outline: 'none',
    border: 'none',
  
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'all 0.2s linear',
    
    margin: '7% auto',
    letterSpacing: '0.05em',
  }
  const blockLink = {
   fontSize: '12px',
   color: 'grey',
   textDecoration:'none',
   paddingLeft: '10px'
  }
    return(
      <form>
        <input type='text' style={inputStyle} placeholder='username'/>
        <input type='password' style={inputStyle} placeholder='password'/>
        <button style= {buttonStyle}>Log In</button>
        <Link style={blockLink} to='/sign-up'>Don't have an account?</Link>
      </form>
    )
  }
}

export default LogInForm;