import React from 'react'
import { faNairaSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import dis from "../assets/dis.png"
import heart from "../assets/heart.png"
import { useState } from 'react'

function Cart({img, h2, price}) {

  return (
    <div className='text-center min-[768px]:w-[200px] flex flex-col gap-[1em] relative items-center shadow-lg shadow-gray-100 pb-[1em] h-[350px] min-[1200px]:w-[250px] object-cover bg-white rounded-[1em]'>
        <img src={img} className='h-[60%] rounded-t-[1em] object-cover w-full' alt="" />
        <img src={heart} className='absolute text h-[30px] w-[30px] text-white text-[1.5rem] right-[0.5em] top-[0.5em]' alt="" />
        <img src={dis} className='absolute top-[0.7em] left-[0.7em] w-[60px]' alt="" />
        <h2 className='lora text-[--accent] font-bold'>{h2}</h2>
        <p className='flex items-center gap-[.2em]'><FontAwesomeIcon icon={faNairaSign} />{price}</p>
        <Link to={"/cart"} className = "px-[1em] py-[0.5em] rounded-[10px] hover:scale-110 duration-[0.5s] border-[#e4b363] border-[1.5px] ">
          Add to cart
        </Link>
    </div>
  )
}

export default Cart