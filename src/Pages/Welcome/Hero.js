import React from 'react'
import "./hero.css";
const Hero = () => {
  return (
    <>
    <div>
    <img src='https://graph.org/file/823a5c7b134ad3a598c60.jpg' className='heroimg'></img>
    <div className='herocontent'>
    <h1 className='heroheader'>Welcome to my website</h1>
    <p className='heropara'>Experience seamless healthcare management with our advanced <br></br>Hospital Management System. Our platform is designed to enhance<br></br> patient care, streamline hospital operations, and improve efficiency <br></br>across all departments.</p>
    <button className='herobtn'>EXLPORE</button>
    </div>
    </div>
    </>
  )
}

export default Hero