import React from 'react'
import plumber from '../assets/plumber.png'
import plumbertext from '../assets/plumbertext.png'

const Main = () => {
  return (
    <>
      <div className='main-container'>
        <div className='main-box'>
          <div className='main-box-text'>
            <img
              src={plumbertext}
              alt='plumber text'
              style={{ scale: '.6', margin: '-5%' }}
            />
          </div>
          <div style={{ marginRight: '20%' }}>
            <img src={plumber} alt='plumber' className='main-box-image' />
          </div>
        </div>
        <div className='main-button-container'>
          <button className='main-button'>Help Me</button>
        </div>
      </div>
    </>
  )
}

export default Main
