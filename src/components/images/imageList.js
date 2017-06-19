import React, { Component } from 'react';
import ImageListItem from './imageListItem'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class ImageList extends Component{
  constructor(props) {
    super(props);
    this.state = {
    //props and state go here
    images: [],
    }
//functions for input changes etc. here
   
  }

  componentDidMount() {
    /**
     * The fetching we do here in componentDidMount will
     * only fetch when the component initially loads.
     */

    //fetch images
    fetch('https://the-gayllery.herokuapp.com/api/v1/images.json')
      .then((response) => {
        console.log(response);
        return response.json()
      })
      .then((responseJson) => {
        this.setState((prevState) => {
          console.log(this.state, responseJson)
          console.log(responseJson)
          return {
            images: responseJson,
          }
        });
      });
  }
  render(){
    return(
      <ul>
        {this.state.images.map((image) => {
          return(
            <ImageListItem image={image} />
          )
        })}
      </ul>
    )
  }
}

export default ImageList;