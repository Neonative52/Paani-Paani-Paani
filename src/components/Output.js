import React from 'react'

const Output = ({justifyContent,alignItems}) => {
  return (
    <div className='output' 
    style ={{
              'justify-content': justifyContent,
              'align-items':alignItems
            }} 
    >
      <img src={require('../boy.png')} className='boy' alt='boy'></img>
    </div>
  )
}

export default Output
