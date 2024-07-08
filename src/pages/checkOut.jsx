import React from 'react'
import Nav1 from '../component/nav1'
import arrow from "../assets/arrow.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNairaSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import cartImg1 from "../assets/cart14.png"
import cartImg2 from "../assets/cart13.png"

function Check() {
  return (
    <div>
        <Nav1 nav={true}/>
        <section className='minh-[100vh] h-auto py-[4em] flex flex-col items-center justify-center font-extrabold px-[2em]'>
            <h2 className='text-4xl lora text-center uppercase mt-[4em] mb-[.5em]'>Check Out</h2>
            <p className='flex text-center mb-[2em] items-center'>Cart <img src={arrow} className='ml-[1em] mr-[.5em] h-[15px]' alt="" /> <span className='mr-[.5em] text-[#e4b363]'>CheckOut</span> <img src={arrow} className='mr-[.5em] h-[15px]' alt="" /> Confirmation</p>
            <div className='flex lg:flex-row min-[768px]:flex-col-reverse  h-full w-full gap-[2em] px-[0em]'>
                <div className='min-h-[800px] sm:mt-0 mt-[2em] lg:w-[50%] bg-white rounded-[1em] sm:p-[2em] px-0 uppercase'>
                    <div className='border-b-[1.5px] border-b-[--accent] pb-[1em] px-[2em]'>
                        <h2 className='text-3xl lora text-[--accent]'>Shipping Details</h2>
                    </div>
                    <div className='lora sm:px-[2em] px-[2em] grid grid-cols-1 sm:grid-cols-2 py-[2em]'>
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
                            <li className=''>
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
                            <h2 className='sm:text-3xl text-2xl lora text-[--accent]'>Shipping Details</h2>
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

                                <p className='text-center mt-[1em]'>
                                    <Link className='bg-[--accent] py-[1em] rounded-[10px] px-[1.5em] text-white font-semibold'>
                                        PAY <FontAwesomeIcon icon={faNairaSign}/> 12,500
                                    </Link>
                                </p>
                        </form>
                    </div>
                </div>
                <div className='sm:h-[600px] h-[500px] sm:my-[0em] my-[10em] mt-0 w-[100%] min-[768px lg:w-[50%]' >
                    <h2 className='p-[1em] text-3xl lora text-[--accent]'>Your Order</h2>
                    <div className='w-[100%] h-[600px] bg-white rounded-[1em]'>
                        <div className='w-[full] p-[1em] px-[2em] flex justify-between text-[1.1rem] lora border-[1.5px] border-b-[--accent]'>
                            <p>Two Items</p>
                            <p>Edit Cart</p>
                        </div>
                        <div className='flex flex-wrap items-center  justify-center gap-[2em] sm:gap-[4em] font-semibold py-[1em] border-b-[1.5px] border-[--accent]'>
                            <img src={cartImg1} className='sm:w-[150px] w-[100px]' alt="" />
                            <p>Rare Stud Earings</p>
                            <p className='sm:flex-grow-0 flex-grow text-center ml-[2em] lg:m-0 mt-[-5.5em]'><FontAwesomeIcon icon={faNairaSign}/>3500</p>
                        </div>
                        
                        <div className='flex flex-wrap items-center px-[2em]  justify-center gap-[1em] sm:gap-[4em] font-semibold py-[1em] border-b-[1.5px] border-[--accent]'>
                        <img src={cartImg2} className='sm:w-[150px] w-[100px]' alt="" />
                            <p>Custom Gold Necklace</p>
                            <p className='sm:flex-grow-0 lg:mt-0 flex-grow text-center ml-[-0.2em] mt-[-3em]'><FontAwesomeIcon icon={faNairaSign}/>3500</p>
                        </div>
                        <div className='sm:text-xl text-[1.1rem] lora flex flex-col items-end py-[1em] px-[2em] gap-[.5em]'>
                            <p className='lora'>Subtotal: <FontAwesomeIcon icon={faNairaSign}/>7000</p>
                            <p className='lora'>Shipping: <FontAwesomeIcon icon={faNairaSign}/>3500</p>
                            <p className='lora'>Tax: <FontAwesomeIcon icon={faNairaSign}/>2000</p>
                            <p className='lora'><span className='text-[--accent] lora'>Total:</span> <FontAwesomeIcon icon={faNairaSign}/>12,500</p>
              
                        </div>

                    </div>
                </div>
            </div>

            <div className='flex justify-start w-full px-[2em] mt-[2em]'>
                <Link to={"/"} className='hover:scale-125 duration-[0.5s]'>
                    <p className='text-xl flex items-center' >
                        <img src={arrow} className='inline rotate-180 mr-[1em]' alt="" />
                    Back To Shop
                     </p>
                </Link>
            </div>
        </section>
    </div>
  )
}

export default Check