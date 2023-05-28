import React from 'react'
import icongroup from '../assets/icongroup.png'
import title from '../assets/title.svg'

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-subcontainer'>
        <img src={title} alt='title' className='hero-logo' />
        <h1 className='hero-title'>What is Lorem Ipsum?</h1>
        <div style={{ width: '750px' }}>
          <p className='hero-text'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled.
          </p>
        </div>
        <img
          src={icongroup}
          alt='icongroup'
          style={{ width: '75%', marginLeft: 'auto', marginRight: 'auto' }}
        />
        <button className='hero-button'>Help Me</button>
      </div>
    </div>
  )
}

export default Hero
