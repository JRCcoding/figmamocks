import React from 'react'
import pipes from '../assets/pipes.png'
import services from '../assets/services.png'

const Services = () => {
  return (
    <div
      style={{
        backgroundColor: '#50B2EA',
        backgroundImage: `url(${pipes})`,
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ marginTop: '5%', marginBottom: '4%', fontSize: '48px' }}>
        Services
      </h1>
      <img src={services} alt='services' style={{ marginBottom: '3%' }} />
    </div>
  )
}

export default Services
