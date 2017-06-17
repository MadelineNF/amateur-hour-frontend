import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import Footer from './components/footer'
import Landing from './components/landing'
import SignUpForm from './components/signUpForm'
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
    }
//functions for input hcanges etc. here
   
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
        <Nav/>
          <main>
            <Router>
              <div>
                {/* Set routes here */}
                <Route exact path= '/' component= {Landing} />
                <Route exact path= '/sign-up' component= {SignUpForm} />
              </div>
            </Router>
         </main> 
        <Footer/>
      </div>
    );
  }
}

export default App;
