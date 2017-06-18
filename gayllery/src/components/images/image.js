import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ImageList from './imageList';


class Image extends Component{

  
  render(){
    return(
      <div>
        <img src='{this.props.image.src}' alt='{this.props.image.description}'/>
        <h3>{this.props.image.name}</h3>
        <p>{this.props.image.description}</p>
        <p>{this.props.image.src}</p>
      </div>
    )
  }
}

export default Image;