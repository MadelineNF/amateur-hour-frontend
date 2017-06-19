import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Nav extends Component{
  render(){
    return(
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
          <li><Link to='/images'>Images</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;