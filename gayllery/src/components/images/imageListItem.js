import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ImageList from './imageList';


class ImageListItem extends Component{
  render(){
    const boxStyle = {
      width: '80%',
      height: '120px',
      color: '#374142',
      background: 'white',
      listStyle: 'none',
      margin:'10px auto 20px auto',
      boxShadow: "2px 3px 13px 1px rgba(56,55,56,0.66)",
    }
    const backgroundDark = {
      background: '#374142'
    }
    return(
     
     <li style= {boxStyle}>
      <p><Link to= "/image/{this.props.image.id}">{this.props.image.name}</Link></p>
      <p>{this.props.image.description}</p>
     </li>
     
    )
  }
}

export default ImageListItem;