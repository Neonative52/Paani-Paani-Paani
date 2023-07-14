import React from 'react'
import Template from './Template'
import Problem from './Problem'

const Input = ({justifyContent,setJustifyContent,alignItems,setAlignItems}) => {
  
  return (
    <div className='input'>
        <Problem></Problem>
        <Template
          justifyContent={justifyContent}
          setJustifyContent = {setJustifyContent}
          alignItems = {alignItems}
          setAlignItems = {setAlignItems}
        ></Template>
    </div>
  )
}

export default Input
