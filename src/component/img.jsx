import React from 'react'

function Img({img}) {
  return (
    <div className='h-[100%] w-[100%] '>
        <img src={img} className=' top-0' alt="" />
    </div>
  )
}

export default Img