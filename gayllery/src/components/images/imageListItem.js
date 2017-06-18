import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ImageList from './imageList';


class ImageListItem extends Component{
  render(){
    return(
     <li>
      <p><Link to= "/image">{this.props.image.name}</Link></p>
      <p>{this.props.image.description}</p>
     </li>
    )
  }
}

export default ImageListItem;