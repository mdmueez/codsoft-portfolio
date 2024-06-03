import Image from 'next/image'
import React from 'react'
import self from "@/public/self.jpg"
import Navbar from '@/components/navbar'
import html from "@/public/html.png"
import css from "@/public/css.png"
import js from "@/public/js.png"
import react from "@/public/react.png"

const Home = () => {
  const icons = [html, css, js, react];

  return (
    <div className='bg-gradient-to-b from-neutral-950 to-neutral-700 flex flex-col items-center justify-center gap-8 min-h-screen w-screen'>
      <Navbar />
      <div id="home" className="flex flex-col md:flex-row justify-between items-center w-screen p-12">
        <div className="">
          <h1 className='text-4xl font-bold'>Hi, <span className='text-red-500'>I&apos;m Mueez</span></h1>
          <h2 className='text-2xl font-semibold'>Currently pursuing B.E. in KNSIT</h2>
        </div>
        <div className="max-md:mt-10">
          <Image src={self} width={400} height={500} alt='self' className=' rounded-full' />
        </div>
      </div>
      <div id='about' className="flex flex-col items-center justify-center min-w-full max-md:p-4">
        <h1 className='text-3xl font-semibold'>About Me</h1>
        <p className='mt-3 text-lg'>I&apos;m Mohammed Mueez Mujeeb, I&apos;m currently pursuing <span className='text-red-500'>B.E. in Artificial Intelligence</span><br />My interests are Web Development and AI and trying to dive into AI & ML full time</p>
      </div>
      <div id='skills' className="flex flex-col items-center justify-center">
        <h1 className='text-3xl font-bold'>Skills</h1>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {icons.map((icon, index) => (
            <Image src={icon} width={100} height={100} alt='skills' key={index} className=' col-span-1' />
          ))}
        </div>
      </div>
      <div className="relative bottom-0 flex flex-col items-center justify-center w-screen gap-2">
        <p className='text-xl font-bold'>Contact me</p>
        <a className='text-blue-300' href="mailto:mohammedmueez2005@gmail.com">mohammedmueez2005@gmail.com</a>
      </div>
    </div>
  )
}

export default Home