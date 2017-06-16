import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
constructor(props) {
    super(props);
    this.state = {
    
    }

   
  }

  componentDidMount() {
    /**
     * The fetching we do here in componentDidMount will
     * only fetch when the component initially loads.
     */
    
    //fetch collections
    fetch('https://the-gayllery.herokuapp.com/api/v1/collections.json')
      .then((response) => {
        console.log(response);
        return response.json()
      })
      .then((responseJson) => {
        this.setState((prevState) => {
          return {
            collections: responseJson.quotesData,
          }
        });
      });

    //fetch images
    fetch('https://the-gayllery.herokuapp.com/api/v1/images.json')
      .then((response) => {
        console.log(response);
        return response.json()
      })
      .then((responseJson) => {
        this.setState((prevState) => {
          return {
            collections: responseJson.quotesData,
          }
        });
      });

    //fetch users
    fetch('https://the-gayllery.herokuapp.com/api/v1/users.json')
      .then((response) => {
        console.log(response);
        return response.json()
      })
      .then((responseJson) => {
        this.setState((prevState) => {
          return {
            collections: responseJson.quotesData,
          }
        });
      });
  }

  render() {
    return (
      <div className="App">
      
      </div>
    );
  }
}

export default App;
