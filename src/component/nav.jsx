import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import cart from "../assets/bas.png"

function Nav({}) {
  return (
    <div className='bg-white z-50 lora font-semibold w-full text-3xl fixed top-0 flex sm:px-[--padx] px-[1.2em]  py-[0.5em] sm:py-[--pady] justify-between items-center'>
        <Link className='text-[--accent] lora italic font-bold'>
            <p className='t'>Belle</p>
        </Link>

        <ul className='flex gap-[2em] text-3xl text-[--accent]'>
            <Link to={"/cart"} className='hover:scale-110 hover:animate-pulse duration-[0.5s]'>
                <img src={cart} className='h-[40px] w-[40px]' alt="" />
            </Link>
        </ul>
    </div>
  )
}

export default Nav