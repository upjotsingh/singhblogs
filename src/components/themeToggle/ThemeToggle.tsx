"use client";

import { ThemeContext } from '@/context/ThemeContext'
import Image from 'next/image'
import React, { useContext } from 'react'

const ThemeToggle = () => {

  const {theme,toggle}=useContext(ThemeContext)!

  return (
    <div className='flex items-center justify-between w-10 h-5 rounded-[50px] cursor-pointer bg-black relative' 
    style={{background:theme==='dark'?'white':'#0f172a'}}
    onClick={toggle}>
      <Image src='/moon.png' alt='moon' width={14} height={14}/>
      <div className={`w-[15px] h-[15px] rounded-[50%] bg-background absolute ${theme==='dark'?'left-[1px]':'right-[1px]'}`}></div>
      <Image src='/sun.png' alt='sun' width={14} height={14}/>
    </div>
  )
}

export default ThemeToggle