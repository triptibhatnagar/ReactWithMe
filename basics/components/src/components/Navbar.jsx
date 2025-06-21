import React from 'react'
import NavPart2 from './NavPart2'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-5 bg-orange-500 ">
      <h2 className="text-2xl">Hey Buddy</h2>
      <NavPart2/>
    </nav>
  )
}

export default Navbar
