import React, { Component } from 'react';
import LogInForm from './logInForm'

class Landing extends Component{
  render(){

    const colorLight ='white';
    const colorDark = '#374142';
    const sectionLight = {
      background: colorLight,
      width: '100%',
      height: '100vh',
      color: colorDark,
    }
    const sectionDark = {
      background: colorDark,
      width: '100%',
      height: '100vh',
      color: colorLight,
    }
    const paddingJumbo = {
      padding: '200'
    }
    


    return(
      <div>
        <div className='home' style={sectionLight}>
          <h1 style={paddingJumbo}><u>Welcome to The Gayllery!</u></h1>
          <LogInForm/>
        </div>
        <div classID='about' style={sectionDark}>
          <h3 className='sectionTitle' style= {paddingJumbo}>What is The Gayllery?</h3>
          <p className='sectionContent'>Glad you asked! The Gayllery is a platform created to allow members to showcase their art in a safe space. Our mission is to create an environment where professional and semi-professional artists can easily come and develop an online portfolio.</p>
        </div>
        <div classID='contact' style={sectionLight}>
          <h3 className='sectionTitle' style={paddingJumbo}>The deets</h3>
          <p className='sectionContent'>You can feel free to <a href='mailto: madelinenelsonfolkersen@gmail.com'>email</a> me or shoot me a message on my <a href='https://www.linkedin.com/in/madelinefolkersen/'>Linkedin</a>!</p>
        </div>
      </div>
    )
  }
}

export default Landing;