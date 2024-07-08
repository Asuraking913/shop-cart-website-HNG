import React, { useEffect } from 'react'
import Nav1 from '../component/nav1'
import Item from '../component/item'
import cartImg1 from "../assets/cart14.png"
import cartImg2 from "../assets/cart13.png"
import cartImg3 from "../assets/cart3.png"
import cartImg4 from "../assets/cart4.png"
import cartImg5 from "../assets/cart9.png"
import cartImg6 from "../assets/cart6.png"
import cartImg7 from "../assets/cart7.png"
import cartImg8 from "../assets/cart8.png"
import cartImg9 from "../assets/cart9.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNairaSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
// swiper
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import {Navigation, Pagination, Autoplay} from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import Bough from '../component/bought'
import Foot from '../component/footer'

function CartPage() {

  useEffect(() => {
    window.scrollTo({top : 0, behavior : 'instant'})
  })

  const itemList = [
    {
      img: cartImg1, 
      h2: "Rare Stud Earrings",
      price: "These elegant stud earrings feature rare gemstones, meticulously crafted to add a touch of sophistication to any outfit. Perfect for both casual and formal occasions."
    }, 
    {
      img: cartImg2, 
      h2: "Custom Gold Necklace",
      price: "A beautifully designed gold necklace with customizable pendants, perfect for personalizing with initials or symbols that hold special meaning."
    }
]

const slide1 = [
  {
    img: cartImg7, 
    h2: "Silver Chain Necklace",
    price: "7,500"
  }, 
  {
    img: cartImg9, 
    h2: "Rare Stud Earrings",
    price: "3,500"
  }, 
  {
    img: cartImg3, 
    h2: "Bangle Bracelet",
    price: "8,500"
  }, 
  {
    img: cartImg4, 
    h2: "Pendant Necklace",
    price: "20,500"
  }]

  const slide2 = [
    {
      img: cartImg4, 
      h2: "Silver Chain Necklace",
      price: "7,500"
    }, 
    {
      img: cartImg5, 
      h2: "Rare Stud Earrings",
      price: "3,500"
    }, 
    {
      img: cartImg6, 
      h2: "Bangle Bracelet",
      price: "8,500"
    }, 
    {
      img: cartImg8, 
      h2: "Pendant Necklace",
      price: "20,500"
    }]

const slide1List = slide1.map((items, i) => (<SwiperSlide className='' key = {i}><Bough img={items.img} h2={items.h2} price={items.price}/></SwiperSlide>))
const slide1List1 = slide2.map((items, i) => (<SwiperSlide className='' key = {i}><Bough img={items.img} h2={items.h2} price={items.price}/></SwiperSlide>))
const items = itemList.map((item, i) => (<Item key={i} img={item.img} h2={item.h2} p={item.price} />))

  return (
    <div className=''>
      <Nav1 cart={"Your Cart"} />
      <section className='flex flex-col min-[768px]:flex-col lg:flex-row gap-[2em] relative justify-betweengrid-cols-2 grid-row-1 sm:mt-[10em] m-[2em]'>
      <h2 className='text-xl absolute sm:text-3xl left-[35%] sm:left-[42%] lora font-extrabold top-[-2em]'>Your Cart</h2>

        <div className='bg-white rounded-[2em] gap-[2em] py-[4em] flex items-center '>

            <div className='flex flex-col gap-[1.5em]'>
              {items}
            </div>
        </div>
        <div className='sm:w-[50%] p-[2em] flex flex-col gap-[0.5em] rounded-[1em] bg-white h-[300px]'>
            <h3 className='text-2xl lora text-[--accent]'>Cart Total</h3>
            <div className='text-xl lora flex flex-col gap-[.5em]'>
              <p className='roboto'>Subtotal: <FontAwesomeIcon icon={faNairaSign}/>7000</p>
              <p className='roboto'>Shipping: <FontAwesomeIcon icon={faNairaSign}/>3500</p>
              <p className='roboto'>Tax: <FontAwesomeIcon icon={faNairaSign}/>2000</p>
              <p className='roboto'><span className='text-[--accent] lora'>Total:</span> <FontAwesomeIcon icon={faNairaSign}/>12,500</p>
              
            </div>
            <Link to={"/check"} className='sm:px-[1em] px-[0.5em] flex items-center justify-center bg-[--accent] py-[0.5em] text-[0.8rem] sm:text-xl text-white roboto mx-[1em] mt-[1em] font-semibold rounded-[8px]'>
              Proceed To Check Out
            </Link>
        </div>
      </section>
      <section className='py-[2em]'>
        <div className='min-[768px]:hidden hidden lg:block'>
          <h2 className='text-3xl text-center mb-[1em] lora'>Usually Bought Together</h2>
          <Swiper
                  spaceBetween={20}
                  slidesPerView={4}
                  className='w-[80%]  h-[400px]'
                  >
                            {slide1List}
          </Swiper>
          
        </div>
        <div className='min-[768px]:block hidden lg:hidden'>
        <h2 className='text-3xl text-center mb-[1em] lora'>Usually Bought Together</h2>

            <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    className='w-[80%] h-[400px]'
                    >
                              {slide1List}
            </Swiper>
          </div>
          <div className='sm:hidden block'>
          <h2 className='text-3xl text-center mb-[1em] lora'>Usually Bought Together</h2>

            <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop = {true}
                    navigation = {true}
                    autoplay = {{delay : 7000}}
                    pagination = {{clickable: true}}
                    className='w-[80%] h-[400px]'
                    >
                              {slide1List}
            </Swiper>
          </div>
      </section>
      <section>
      <div className='min-[768px]:hidden hidden lg:block'>
      <h2 className='text-3xl text-center mb-[1em] lora'>You May Also Like</h2>
          <Swiper
                  spaceBetween={20}
                  slidesPerView={4}
                  className='w-[80%]  h-[400px]'
                  >
                            {slide1List1}
          </Swiper>
          
        </div>
        <div className='min-[768px]:block lg:hidden hidden'>
      <h2 className='text-3xl text-center mb-[1em] lora'>You May Also Like</h2>

            <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    className='w-[80%] h-[400px]'
                    >
                              {slide1List1}
            </Swiper>
          </div>
          <div className='sm:hidden block'>
          <h2 className='text-3xl text-center mb-[1em] lora'>You May Also Like</h2>


            <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop = {true}
                    navigation = {true}
                    autoplay = {{delay : 7000}}
                    pagination = {{clickable: true}}
                    className='w-[80%] h-[400px]'
                    >
                              {slide1List}
            </Swiper>
          </div>
      </section>
      <Foot />
    </div>
  )
}

export default CartPage