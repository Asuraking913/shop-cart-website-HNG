import React from 'react'

function Img({img, name}) {
  return (
    <div className='h-[100%] sm:w-[100%] '>
          <img src={img} className='top-0 hover:scale-105 duration-[0.5s]' alt="" />
    </div>
  )
}

export default Img