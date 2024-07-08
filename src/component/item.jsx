import React from 'react'
import { faNairaSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function Item({img, h2, p}) {
    
  return (
    <div className='flex items-center gap-[2em] px-[2em]'>
        <img src={img} className='w-[500px] object-cover h-[400px]' alt="" />
        <div className='flex flex-col gap-[1em]'>
            <h2 className='text-3xl text-[--accent] lora'>{h2}</h2>
            <p className='w-[100%]'><span className='font-bold lora text-xl '>Description: </span>{p}</p>
            <div className='flex flex-col gap-[0.5em] text-xl'>
                <p className='text-xl'> Quantity: - 1 +</p>
                <p>Price: <FontAwesomeIcon icon={faNairaSign}/>3500</p>
                <p>Subtotal: 3500</p>
            </div>
            <Link className='px-[1.5em] roboto text-xl font-semibold w-[60%] py-[0.5em] border-[1.5px] rounded-[10px] border-[#e4b363]'>
                Remove Cart 
            </Link>
        </div>
    </div>
  )
}

export default Item