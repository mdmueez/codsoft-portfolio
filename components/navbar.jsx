import React from 'react'

const Navbar = () => {
  return (
    <div className='max-md:hidden fixed top-1 right-6 flex flex-row gap-6'>
        <a className='text-red-600 font-semibold' href=''>Home</a>
        <a className='text-red-600 font-semibold' href=''>About</a>
        <a className='text-red-600 font-semibold' href=''>Skill</a>
    </div>
  )
}

export default Navbar