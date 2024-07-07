import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function Nav({}) {
  return (
    <div className='bg-white lora font-senibold w-full text-3xl fixed top-0 flex px-[--padx] py-[--pady] justify-between items-center'>
        <Link className='text-[--accent] lora italic font-bold'>
            <p className='t'>Belle</p>
        </Link>

        <ul className='flex gap-[2em] text-3xl text-[--accent]'>
            <Link>
                <FontAwesomeIcon icon={faCartShopping} />
            </Link>
        </ul>
    </div>
  )
}

export default Nav