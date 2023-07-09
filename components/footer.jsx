import Link from 'next/link'
import React from 'react'
import {AiFillInstagram ,AiOutlineTwitter} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='footer-container'>
      <p>My ecom , All rights reserved</p>
      <p className='icons'>
      <Link href='/' className='ic' >
        <AiFillInstagram/>
      </Link>
      <Link href='/' className='ic'>
        <AiOutlineTwitter/>
      </Link>
      </p>
      
    </div>
  )
}

export default Footer
