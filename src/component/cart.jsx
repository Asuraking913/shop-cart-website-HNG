import React from 'react'
import { faNairaSign } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import dis from "../assets/dis.png"

function Cart({img, h2, price}) {
  return (
    <div className='text-center flex flex-col gap-[1em] relative items-center shadow-lg shadow-gray-200 pb-[1em] h-[350px] w-[250px] object-cover bg-white rounded-[1em]'>
        <img src={img} className='h-[60%] rounded-t-[1em] object-cover w-full' alt="" />
        <FontAwesomeIcon className='absolute text text-white text-[1.5rem] right-[0.5em] top-[0.5em]' icon={faHeart}/>
        <img src={dis} className='absolute top-[0.5em] left-[0.5em] w-[60px]' alt="" />
        <h2 className='lora text-[--accent] font-bold'>{h2}</h2>
        <p className='flex items-center gap-[.2em]'><FontAwesomeIcon icon={faNairaSign} />{price}</p>
        <Link className = "px-[1em] py-[0.5em] rounded-[10px] hover:scale-110 duration-[0.5s] border-[#e4b363] border-2">
          Add to cart
        </Link>
    </div>
  )
}

export default Cart