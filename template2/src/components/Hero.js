import React from 'react'
import herobg from '../assets/hero.png'
import icongroup from '../assets/icongroup.png'
import title from '../assets/title.svg'

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '840px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
    >
      <div
        style={{
          marginTop: '5%',
          marginBottom: '10%',
          color: 'white',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '35px',
        }}
      >
        <img src={title} alt='title' style={{ scale: '.6' }} />
        <h1 style={{ scale: '1.2', marginTop: '5%', marginBottom: '5%' }}>
          What is Lorem Ipsum?
        </h1>
        <div style={{ width: '750px' }}>
          <p>
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
        <button
          style={{
            borderRadius: '8px',
            height: '62px',
            width: '192px',
            margin: '5% auto',
            border: 'none',
            paddingTop: '2.5%',
            paddingBottom: '2.5%',
            color: 'white',
            backgroundColor: '#50B2EA',
            fontSize: '18px',
          }}
          className='button'
        >
          Help Me
        </button>
      </div>
    </div>
  )
}

export default Hero
