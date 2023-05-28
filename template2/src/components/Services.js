import React from 'react'
import services from '../assets/services.png'

const Services = () => {
  return (
    <div className='services-container'>
      <h1 className='services-title'>Services</h1>
      <img src={services} alt='services' className='services-image' />
    </div>
  )
}

export default Services
