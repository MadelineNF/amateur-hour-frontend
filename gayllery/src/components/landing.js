import React, { Component } from 'react';
import LogInForm from './logInForm'

class Landing extends Component{
  render(){
    return(
      <div>
        <div classID='home'>
          <h1>Welcome to The Gayllery!</h1>
          <LogInForm/>
        </div>
        <div classID='about'>
          <h3 className='sectionTitle'>What is The Gayllery?</h3>
          <p className='sectionContent'>Glad you asked! The Gayllery is a platform created to allow members to showcase their art in a safe space. Our mission is to create an environment where professional and semi-professional artists can easily come and develop an online portfolio.</p>
        </div>
        <div classID='contact'>
          <h3 className='sectionTitle'>The deets</h3>
          <p className='sectionContent'>You can feel free to <a href='mailto: madelinenelsonfolkersen@gmail.com'>email</a> me or shoot me a message on my <a href='https://www.linkedin.com/in/madelinefolkersen/'>Linkedin</a>!</p>
        </div>
      </div>
    )
  }
}

export default Landing;