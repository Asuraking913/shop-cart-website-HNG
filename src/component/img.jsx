import React from 'react'

function Img({img, name}) {
  if (name == 'three') {
    return (
      <div className='h-[100%] w-[100%] flex-grow'>
        <img src={img} className=' top-0' alt="" />
    </div>
    )
  }
  return (
    <div className='h-[100%] sm:w-[100%] '>
        <img src={img} className=' top-0' alt="" />
    </div>
  )
}

export default Img