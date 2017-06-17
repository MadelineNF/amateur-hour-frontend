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
          <li><a href='#about'>About</a></li>
          <li><a href='#contact'>Contact</a></li>
          <li><a href='#profile'>Profile</a></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;