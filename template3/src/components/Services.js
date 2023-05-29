import React from 'react'

const Services = () => {
  return (
    <div className='services-container'>
      <div className='services-title-container'>
        <h1 className='services-title'>Services for you</h1>
        <p className='services-subtitle'>Repair and Maintenance</p>
      </div>
      <div className='services-display'>
        {/* Copy this down to multiply services and change image */}
        <div className='service'>
          <img src='' alt='test' className='service-image' />
          <div className='service-content'>
            <h2 className='service-title'>
              Diagnosis and adjustment of the bike
            </h2>
            <p className='service-text'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
