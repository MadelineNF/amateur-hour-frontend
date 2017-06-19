import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ImageList from './imageList';


class Image extends Component{
  constructor(props) {
    super(props);
    this.state = {
    //props and state go here
    imageID: props.match.params.id,
    image: [],
    }
//functions for input changes etc. here
   
  }

  componentDidMount() {
    /**
     * The fetching we do here in componentDidMount will
     * only fetch when the component initially loads.
     */

    //fetch images
    fetch(`https://the-gayllery.herokuapp.com/api/v1/images/${this.state.imageID}.json`)
      .then((response) => {
        console.log(response);
        return response.json()
      })
      .then((responseJson) => {
        this.setState((prevState) => {
          console.log(this.state, responseJson)
          console.log(responseJson)
          return {
            image: responseJson,
          }
        });
      });
  }

  
  render(){
    return(
      <div>
        <img src='${this.state.image.src}' alt='${this.state.image.description}'/>
        <h3>{this.state.image.name}</h3>
        <p>{this.state.image.description}</p>
        <p>{this.state.image.src}</p>
      </div>
    )
  }
}

export default Image;