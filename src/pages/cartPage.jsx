import React from 'react'
import Nav1 from '../component/nav1'
import Item from '../component/item'
import cartImg1 from "../assets/cart14.png"
import cartImg2 from "../assets/cart13.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNairaSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function CartPage() {

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

const items = itemList.map((item, i) => (<Item key={i} img={item.img} h2={item.h2} p={item.price} />))

  return (
    <div className=''>
      <Nav1 cart={"Your Cart"} />
      <section className='flex gap-[2em] justify-betweengrid-cols-2 grid-row-1 min-h-[100vh] m-[2em]'>
        <div className='bg-white rounded-[2em] gap-[2em] py-[4em] flex items-center '>
            <div className='flex flex-col gap-[1.5em]'>
              {items}
            </div>
        </div>
        <div className='w-[50%] p-[2em] flex flex-col gap-[0.5em] rounded-[1em] bg-white h-[300px]'>
            <h3 className='text-2xl lora text-[--accent]'>Cart Total</h3>
            <div className='text-xl lora flex flex-col gap-[.5em]'>
              <p className='roboto'>Subtotal: <FontAwesomeIcon icon={faNairaSign}/>7000</p>
              <p className='roboto'>Shipping: <FontAwesomeIcon icon={faNairaSign}/>3500</p>
              <p className='roboto'>Tax: <FontAwesomeIcon icon={faNairaSign}/>2000</p>
              <p className='roboto'><span className='text-[--accent] lora'>Total:</span> <FontAwesomeIcon icon={faNairaSign}/>12,500</p>
              
            </div>
            <Link className='px-[1em] bg-[--accent] py-[0.5em] text-xl text-white roboto mx-[1em] mt-[1em] font-semibold rounded-[8px]'>
              Proceed To Check Out
            </Link>
        </div>
      </section>
    </div>
  )
}

export default CartPage