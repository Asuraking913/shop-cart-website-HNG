import React from 'react'
import { Link } from 'react-router-dom'
import cart from "../assets/bas1.png"
import back from "../assets/back.png"
import bas1 from "../assets/bas1.png"

function Nav1() {
  return (
    <div className='z-50 lora bg-[#f5f5f5] font-semibold w-full text-3xl fixed top-0 flex sm:px-[--padx] px-[1.2em]  py-[0.4em] sm:py- justify-between items-center'>
        <Link className='text-[--accent] lora italic font-bold'>
            <img src={back} className='sm:w-[40px] w-[30px]' alt="" />
        </Link>

        <ul className='flex gap-[2em] text-3xl text-[--accent]'>
            <Link className='hover:scale-110 hover:animate-pulse duration-[0.5s]'>
                <img src={bas1} className='w-[40px] sm:w-[60px] object-cover' alt="" />
                {/* <div className='bas1 h-[60px] bg-cover w-[70px]'></div> */}
            </Link>
        </ul>
    </div>
  )
}

export default Nav1