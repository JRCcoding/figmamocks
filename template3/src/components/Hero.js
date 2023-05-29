import React from 'react'
import heroImage from '../assets/hero-image.png'
import logo from '../assets/logo.png'

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-logo-text'>
        <img
          src={logo}
          alt='Round Rock Bicycle Repair Logo'
          className='hero-logo'
        />
        <div className='hero-title-container'>
          <h3 className='hero-pre-title'>What is Lorem Ipsum</h3>
          <h1 className='hero-title'>What is Lorem Ipsum</h1>
        </div>
        <p className='hero-text'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <button className='hero-button'>Help Me</button>
      </div>
      <div className='hero-image-container'>
        <img src={heroImage} alt='hero-img' className='hero-image' />
        <div className='hero-ellipse' />
      </div>
    </div>
  )
}

export default Hero
