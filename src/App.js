import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import Footer from './components/footer'
import Landing from './components/landing'
import SignUpForm from './components/signUpForm'
import ImageList from './components/images/imageList'
import Image from './components/images/image'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



class App extends Component {
constructor(props) {
    super(props);
    this.state = {
    //props and state go here
    //images: [],
    //users: [],
    //collections: [],
    }
//functions for input changes etc. here
   
  }

  componentDidMount() {
    /**
     * The fetching we do here in componentDidMount will
     * only fetch when the component initially loads.
     */

    //fetch collections
    /*fetch('https://the-gayllery.herokuapp.com/api/v1/collections.json')
      .then((response) => {
        console.log(response);
        return response.json()
      })
      .then((responseJson) => {
        this.setState((prevState) => {
          return {
            collections: responseJson.collectionsData,
          }
        });
      });*/

    // //fetch images
    // fetch('https://the-gayllery.herokuapp.com/api/v1/images.json')
    //   .then((response) => {
    //     console.log(response);
    //     return response.json()
    //   })
    //   .then((responseJson) => {
    //     this.setState((prevState) => {
    //       return {
    //         images: responseJson.imagesData,
    //       }
    //     });
    //   });

    //fetch users
    /*fetch('https://the-gayllery.herokuapp.com/api/v1/users.json')
      .then((response) => {
        console.log(response);
        return response.json()
      })
      .then((responseJson) => {
        this.setState((prevState) => {
          return {
            users: responseJson.usersData,
          }
        });
      });*/
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav/>
          <main>
                  {/* Set routes here */}
            <Route exact path= '/' component= {Landing} />
            <Route exact path= '/sign-up' component= {SignUpForm} />
            <Route exact path= '/images' component= {ImageList} />
            <Route exact path= '/image/:id' component= {Image} />
          </main> 
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
