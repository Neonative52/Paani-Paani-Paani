import React from 'react'
const Template = ({justifyContent,setJustifyContent,alignItems,setAlignItems}) => {
  const text = ".rajasthan{"
  
  return (
    <section className='template'>
          <text style={{'color':'yellow'}}>
            {text}
          </text>
          <form className='form'>
            <label htmlFor='justify'>justify-content :</label>
            <input id="justify" className='answer' placeholder="Enter value here" autoFocus value={justifyContent} onChange={(e)=>setJustifyContent(e.target.value)}/>
            <label htmlFor='justify'>align-items :</label>
            <input className='answer' placeholder="Enter value here" value={alignItems} onChange={(e)=>setAlignItems(e.target.value)}/>
          </form>
          <text style={{'color':'yellow'}}>
            {'}'}
          </text>
    </section>
  )
}

export default Template
