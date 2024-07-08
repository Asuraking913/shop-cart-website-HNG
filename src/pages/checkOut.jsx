import React from 'react'
import Nav1 from '../component/nav1'
import arrow from "../assets/arrow.png"

function Check() {
  return (
    <div>
        <Nav1 nav={true}/>
        <section className='minh-[100vh] flex flex-col items-center justify-center font-extrabold px-[2em]'>
            <h2 className='text-4xl lora text-center uppercase mt-[4em] mb-[.5em]'>Check Out</h2>
            <p className='flex text-center mb-[2em] items-center'>Cart <img src={arrow} className='ml-[1em] mr-[.5em] h-[15px]' alt="" /> <span className='mr-[.5em] text-[#e4b363]'>CheckOut</span> <img src={arrow} className='mr-[.5em] h-[15px]' alt="" /> Confirmation</p>
            <div className='flex h-full w-full gap-[2em] px-[0em]'>
                <div className='min-h-[800px] w-[50%] bg-white rounded-[1em] p-[2em] px-0 uppercase'>
                    <div className='border-b-[1.5px] border-b-[--accent] pb-[1em] px-[2em]'>
                        <h2 className='text-3xl lora text-[--accent]'>Shipping Details</h2>
                    </div>
                    <div className='lora px-[2em] grid grid-cols-2 py-[2em]'>
                        <ul className='text-[0.8em] flex flex-col gap-[1em]'>
                            <li className='lora '>
                                <p className='roboto text-[1rem]'>Recipient's Name:</p>
                                Jessica Omolade
                            </li>
                            <li>
                                <p className='text-[1rem]'>Address Line:</p>
                                12 Adetokunbo Ademola Street
                            </li>
                            <li>
                                <p className='text-[1rem]'>City/State:</p>
                                Lagos
                            </li>
                            <li>
                                <p className='text-[1rem]'>Postal Code:</p>
                                101241
                            </li>
                            <li>
                                <p className='text-[1rem]'>Country:</p>
                                Nigeria
                            </li>
                        </ul>
                        <ul className='flex flex-col gap-[1em] text-[0.8em]'>
                        <li className='lora '>
                                <p className='roboto text-[1rem]'>Phone Number:</p>
                                +234 810 123 4567
                            </li>
                            <li>
                                <p className='text-[1rem]'>Email:</p>
                                jessica.omolade@gmail.com
                            </li>
                            <li>
                                <p className='text-[1rem]'>Shipping Method:</p>
                                Standard International Shipping
                            </li>
                            <li>
                                <p className='text-[1rem]'>Estimated Delivery Time:</p>
                                7-14 business days
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className='border-b-[1.5px] border-b-[--accent] pb-[1em] px-[2em]'>
                            <h2 className='text-3xl lora text-[--accent]'>Shipping Details</h2>
                        </div>
                        <form action="#" className='px-[2em] py-[2em] flex flex-col gap-[1em]'>
                            <p className='w-[90%]'> 
                                <label htmlFor="#" className='capitalize font-normal text-gray-400'>Name on card</label>
                                <input className='border-[1.5px] font-semibold border-gray-400 rounded-[7px] block w-full p-[0.3em] lora' type="text" name="" placeholder='JESSICA OMOLADE' id="" />
                            </p>
                            <p className='w-[90%]'> 
                                <label htmlFor="#" className='capitalize font-normal text-gray-400'>Card Number</label>
                                <input className='border-[1.5px] font-semibold border-gray-400 rounded-[7px] block w-full p-[0.3em] lora' type="text" name="" placeholder='342423423423' id="" />
                            </p>
                            <div className='flex gap-[2em]'>
                                <p className='w-[90%]'> 
                                    <label htmlFor="#" className='capitalize font-normal text-gray-400'>Expiration Date</label>
                                    <input className='border-[1.5px] font-semibold border-gray-400 rounded-[7px] block w-full p-[0.3em] lora' type="text" name="" placeholder='JESSICA OMOLADE' id="" />
                                </p>
                                <p className='w-[90%]'> 
                                    <label htmlFor="#" className='capitalize font-normal text-gray-400'>CVV</label>
                                    <input className='border-[1.5px] font-semibold border-gray-400 rounded-[7px] block w-full p-[0.3em] lora' type="text" name="" placeholder='342423423423' id="" />
                                </p>
                            </div>
                            <p className='font-normal capitalize'>
                                <input type="checkbox" className='mr-[0.5em]' name="" id="" />
                                I have read and agreed to the terms and conditions
                                </p>
                        </form>
                    </div>
                </div>
                <div className='w-[50%] h-[600px] bg-white'>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Check