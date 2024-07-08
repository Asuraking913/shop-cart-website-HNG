import React from 'react'

function Foot() {
  return (
    <>
      <section className='h-auto hidden sm:grid bg-[--accent] min-[768px]:grid min-[400px]: min-[768px]:grid-cols-5 min-[768px]: px-[1em] min-[1024px]:grid min-[1024px]:grid-row-1 min-[1024px]:grid-cols-5 py-[2em]  justify-items-center gap-[2em]'>
        <h2 className='lg:text-2xl text-xl self-center lora font-semibold text-white'>Beauty Ireoluwa</h2>
        <ul className='flex flex-col gap-[0.2em] text-white roboto'>
          <li className='text-[1.1rem] text-white lora font-bold'>Dealer on all kinds of jewelries</li>
          <li>Phone: +234 9102469802</li>
          <li>Email: belle’sglamour@gmail.com</li>
          <li>Address: 123 Jewelry Lane, Lagos, Nigeria</li>
        </ul>
        <ul className='flex flex-col gap-[0.2em] text-white roboto'>
          <li className='text-[1.1rem] text-white lora font-bold'>Customer Service</li>
          <li>Product Warranty</li>
          <li>Reviews</li>
          <li>Contact Support</li>
        </ul>
        <ul className='flex flex-col gap-[0.2em] text-white roboto'>
          <li className='text-[1.1rem] text-white lora font-bold'>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Return Policy</li>
          <li>Shipping and Delivery</li>
        </ul>
        <ul className='flex flex-col gap-[0.2em] text-white roboto'>
          <li className='text-[1.1rem] text-white lora font-bold'>About Us</li>
          <li>Blog</li>
          <li>Our Story</li>
          <li>Careers</li>
        </ul>
      </section>
      <section className='h-auto sm:hidden bg-[--accent] px-[1em] py-[2em]'>
        <h2 className=' text-xl self-center lora font-semibold text-white mb-[1em]'>Beauty Ireoluwa</h2>
        <div className='flex text-[0.8em] gap-[.2em] justify-between mb-[1em]'>
          <ul className='flex flex-col gap-[0.2em] text-white roboto'>
            <li className=' text-white font-bold'>Dealer on all kinds of jewelries</li>
            <li>Phone: +234 9102469802</li>
            <li>Email: belle’sglamour@gmail.com</li>
            <li className='w-[90%]'>Address: 123 Jewelry Lane, Lagos, Nigeria</li>
          </ul>
          <ul className='flex flex-col gap-[0.2em] text-white roboto'>
            <li className=' text-white font-bold'>Customer Service</li>
            <li>Product Warranty</li>
            <li>Reviews</li>
            <li>Contact Support</li>
          </ul>
        </div>
        <div className='flex text-[0.8em] justify-between w-[87%]'>
          <ul className='flex flex-col gap-[0.2em] text-white roboto '>
            <li className=' text-white font-bold'>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Return Policy</li>
            <li>Shipping and Delivery</li>
          </ul>
          <ul className='flex flex-col gap-[0.2em] text-white roboto'>
            <li className=' text-white font-bold'>About Us</li>
            <li>Blog</li>
            <li>Our Story</li>
            <li>Careers</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Foot