import React from 'react'
import { Link } from 'react-router-dom'
import cart from "../assets/bas1.png"
import back from "../assets/back.png"
import bas1 from "../assets/bas1.png"

function Nav1({cart}) {
  return (
    <div className='z-50 lora bg-[#f5f5f5] font-semibold w-full text-3xl fxed top-0 flex sm:px-[--padx] px-[1.2em]  py-[0.5em] sm:py- justify-between items-center'>
        <Link className='text-[--accent] lora italic font-bold'>
            <img src={back} alt="" />
        </Link>

        <ul className='flex gap-[2em] text-3xl text-[--accent]'>
            <Link className='hover:scale-110 hover:animate-pulse duration-[0.5s]'>
                {/* <img src={} className='h-[40px] w-[100px] object-cover' alt="" /> */}
                <div className='bas1 h-[60px] bg-cover w-[70px]'></div>
            </Link>
        </ul>
        {/* <p className='absolute left-[42%] uppercase top-[70%]'>{cart}</p> */}
    </div>
  )
}

export default Nav1