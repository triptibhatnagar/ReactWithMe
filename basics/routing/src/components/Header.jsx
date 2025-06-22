import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-zinc-500 px-5 py-4 font-bold flex justify-between'>
      <h2 className='text-xl'>Heyyy</h2>
      <div className='flex gap-8'>
        {/* Reload is happening every time */}
        {/* <a href="/">Home</a>
        <a href="/product">Product</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a> */}

        {/* Now not reloading */}
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/product'>Product</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Header
