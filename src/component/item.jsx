import React from 'react'
import { faNairaSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function Item({img, h2, p}) {
    
  return (
    <div className='flex sm:flex-row flex-col items-center gap-[2em] px-[2em]'>
        <img src={img} className='lg:w-[500px] min-[768px]:w-[400px] min-[768px]:h-[300px] object-cover lg:h-[400px]' alt="" />
        <div className='flex flex-col gap-[1em]'>
            <h2 className='lg:text-3xl  text-2xl text-[--accent] lora'>{h2}</h2>
            <p className='w-[100%] min-[768px]:text-[0.8rem] lg:text-[1rem]'><span className='font-bold lora min-[768px]:text-[1.1rem] lg:text-xl '>Description: </span>{p}</p>
            <div className='flex flex-col gap-[0.5em] text-xl'>
                <p className='text-xl'> Quantity: - 1 +</p>
                <p>Price: <FontAwesomeIcon icon={faNairaSign}/>3500</p>
                <p>Subtotal: <FontAwesomeIcon icon={faNairaSign}/>3500</p>
            </div>
            <Link className='px-[1.5em] roboto min-[768px]:text-[1.1rem] lg:text-xl font-semibold w-[80%] py-[0.5em] border-[1.5px] rounded-[10px] border-[#e4b363]'>
                Remove from cart 
            </Link>
        </div>
    </div>
  )
}

export default Item