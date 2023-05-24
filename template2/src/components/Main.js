import React from 'react'
import plumber from '../assets/plumber.png'
import plumbertext from '../assets/plumbertext.png'

const Main = () => {
  return (
    <>
      <div
        style={{
          height: '763px',
          padding: '10%',
          background: 'linear-gradient(90deg, #ffffff 54%, #50B2EA 0%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            marginLeft: 'auto',
            marginRight: 'auto',
            gap: '0px',
          }}
        >
          <div
            style={{
              borderTopLeftRadius: '45px',
              borderBottomLeftRadius: '45px',
              height: '509px',
              width: '699px',
              backgroundColor: '#50B2EA',
              display: 'flex',
              justifyContent: 'space-around',
              marginTop: '-.2%',
            }}
          >
            <img
              src={plumbertext}
              alt='plumber text'
              style={{ scale: '.6', margin: '-5%' }}
            />
          </div>
          <div style={{ marginRight: '20%' }}>
            <img
              src={plumber}
              alt='plumber'
              style={{
                height: '509px',
                width: '559px',
                borderTop: '2px solid white',
                borderRight: '2px solid white',
                borderBottom: '2px solid white',
                borderTopRightRadius: '45px',
                borderBottomRightRadius: '45px',
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          position: 'absolute',
          top: '1799px',
          left: '843px',
        }}
      >
        <button
          style={{
            borderRadius: '8px',
            height: '62px',
            width: '192px',
            margin: '5% auto',
            border: '2px solid white',
            color: 'white',
            backgroundColor: '#50B2EA',
            fontSize: '18px',
          }}
          className='button'
        >
          Help Me
        </button>
      </div>
    </>
  )
}

export default Main
