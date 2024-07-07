import React from 'react'
import Nav from '../component/nav'
import { Link } from 'react-router-dom'
import myImage1 from "../assets/imgl1.png"
import myImage2 from "../assets/imgl2.png"
import myImage3 from "../assets/imgl3.png"
import cartImg1 from "../assets/cart1.png"
import cartImg2 from "../assets/cart2.png"
import cartImg3 from "../assets/cart3.png"
import cartImg4 from "../assets/cart4.png"
import cartImg5 from "../assets/cart5.png"
import cartImg6 from "../assets/cart6.png"
import cartImg7 from "../assets/cart7.png"
import cartImg8 from "../assets/cart8.png"
import cartImg9 from "../assets/cart9.png"
import cartImg10 from "../assets/cart10.png"
import cartImg11 from "../assets/cart11.png"
import cartImg12 from "../assets/cart12.png"
import Img from '../component/img'
import Cart from '../component/cart'
import person1 from "../assets/person.png"
import quotes from "../assets/quotes.png"

function Land() {

  const imgList = [
    { 
      img: myImage1
    }, 
    {
      img: myImage2
    }, 
    {
      img: myImage3
    }
  ]

  const cartList = [
    {
      img: cartImg1, 
      h2: "Silver Chain Necklace",
      price: "7,500"
    }, 
    {
      img: cartImg2, 
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
    }, 
    {
      img: cartImg5, 
      h2: "Charm Bracelet",
      price: "4,000"
    }, 
    {
      img: cartImg6, 
      h2: "Pendant Necklace",
      price: "2,500"
    }, 
    {
      img: cartImg7, 
      h2: "Drop Earrings",
      price: "15,000"
    }, 
    {
      img: cartImg8, 
      h2: "Bangle Bracelet",
      price: "8,500"
    }, 
    {
      img: cartImg9, 
      h2: "Choker Necklace",
      price: "7,500"
    }, 
    {
      img: cartImg10, 
      h2: "Fashion Ring",
      price: "11,500"
    }, {
      img: cartImg11, 
      h2: "Silver Chain Necklace",
      price: "7,500"
    }, 
    {
      img: cartImg12, 
      h2: "Beaded Bracelet",
      price: "5,000"
    }, 
  ]

  const imgList1 = imgList.map((img, i) => (<div key={i}><Img h1={img.h1} img={img.img}/></div>))
  const cartList1 = cartList.map((items, i) => (<div key = {i}><Cart img={items.img} h2={items.h2} price={items.price}/></div>))

  return (
    <>
    <Nav />
    <section className='h-screen '>
        <div className='background h-full gap-[1em] flex-col w-full flex items-center justify-center'>
            <div className='text-center w-[80%] gap-[1em] flex flex-col items-center'>
              <h1 className='text-[2.5rem] text-white capitalize lora font-extrabold'>Handcrafted Jewelry that tells your unique story</h1>
              <p className='text-center roboto text-white w-[70%]'>Explore our exclusive collection of artisanal jewelry, meticulously crafted to add a touch of sophistication to every moment. From elegant necklaces to stunning custom pieces, find the perfect adornment to celebrate your individuality.</p>
            </div>
            <Link className='px-[2em] py-[1em] rounded-[5px] bg-[--accent] text-white roboto active:bg-[--hov] hover:bg-[--hov] hover:scale-110 duration-[0.5s] font-bold'>
              Shop Now
            </Link>
        </div>
    </section>
    <section className='h-auto'>
      <div className='flex'>
          {imgList1}
      </div>
    </section>
    <section className='h-auto'>
      <div className='w-full h-full grid grid-cols-4 grid-rows-3 py-[4em] px-[4em] gap-[1.5em] justify-items-center bg-[#f5f5f5]'>
        {cartList1}
      </div>
      <div className='flex items-center gap-[2em] px-[6em]'>
        <img src={person1} className='w-[300px]] h-[300px]' alt="" />
        <div className='w-[50%] text-center flex flex-col gap-[1.2em] items-center text-xl h-full p-[1em] lora'>
          <img src={quotes} className='w-[100px] h-[100px]' alt="" />
          <p>Beauty is the best at what she does. Quality delivery? Check! Exceeding expectation? Check!! Timely delivery? Check!!!</p>
          <p>Janet Owo</p>
          <p>Rivers.NG</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Land