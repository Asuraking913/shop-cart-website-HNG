import React from 'react'
import check from "../assets/check.png"
import { Link } from 'react-router-dom'

function Paid() {
  return (
    <div className='flex h-screen bg-[#f5f5f5] flex-col items-center justify-center gap-[2em]'>
        <img src={check} className='sm:w-[300px] w-[150px]' alt="" />

        <h1 className='sm:text-4xl text-center text-2xl lora font-bold  '>YOUR ORDER IS CONFIRMED</h1>

        <p className='lora '>Thank you for shooping with Us. <br />
        Expect your order by 12th july 2024
        </p>

            <Link to={"/"} className='uppercase bg-[--accent] px-[1.5em] rounded-[10px] py-[1em] text-white roboto font-normal'>
            Continue Shopping
        </Link>
    </div>
  )
}

export default Paid