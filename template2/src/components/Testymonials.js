import React from 'react'
import profile from '../assets/profile.png'
import star from '../assets/star.png'

const Testymonials = () => {
  const Rating = (
    <div className='testy-rating'>
      <img
        src={star}
        alt='star rating for testymonial'
        className='testy-star'
      />
      <img
        src={star}
        alt='star rating for testymonial'
        className='testy-star'
      />
      <img
        src={star}
        alt='star rating for testymonial'
        className='testy-star'
      />
      <img
        src={star}
        alt='star rating for testymonial'
        className='testy-star'
      />
      <img
        src={star}
        alt='star rating for testymonial'
        className='testy-star'
      />
    </div>
  )
  return (
    <div className='testy-container'>
      <h1 className='testy-title'>Testymonials</h1>
      <div className='testy-card-container'>
        <div className='testy-card'>
          <div className='testy-profile'>
            <img src={profile} alt='profile' />
          </div>
          <div className='testy-content'>
            <h3 className='testy-card-title'>Courtney Henry</h3>
            <p className='testy-card-text'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            {Rating}
          </div>
        </div>
        <div className='testy-card'>
          <div className='testy-profile'>
            <img src={profile} alt='profile' />
          </div>
          <div className='testy-content'>
            <h3 className='testy-card-title'>Courtney Henry</h3>
            <p className='testy-card-text'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            {Rating}
          </div>
        </div>
      </div>
      <div className='testy-card-container'>
        <div className='testy-card'>
          <div className='testy-profile'>
            <img src={profile} alt='profile' />
          </div>
          <div className='testy-content'>
            <h3 className='testy-card-title'>Courtney Henry</h3>
            <p className='testy-card-text'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            {Rating}
          </div>
        </div>
        <div className='testy-card'>
          <div className='testy-profile'>
            <img src={profile} alt='profile' />
          </div>
          <div className='testy-content'>
            <h3 className='testy-card-title'>Courtney Henry</h3>
            <p className='testy-card-text'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            {Rating}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testymonials
