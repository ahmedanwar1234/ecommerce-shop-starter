import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import {BsBag}from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg'
const Header = () => {
const [isActive,setIsActive]=useState(false)


  const {isOpen,setIsOpen}=useContext(SidebarContext)
  const {itemAmount}=useContext(CartContext)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
    window.screenY > 60 ? setIsActive(true):setIsActive(false)
    })
  })


  return <header className={`${isActive? " bg-transparent":" bg-transparent"} fixed mb-4 w-full z-10 transition-all`}>
    <div className='flex justify-between p-5 text-gray-100 container mx-auto'>

    <div className=''>
<div>
  <img className='  w-[40px]' src={Logo}/>
</div>
    </div >
    <div onClick={()=>setIsOpen(!isOpen)} className=' cursor-pointer flex relative  '><BsBag className="text-3xl text-black"/>
    <div className=' bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-center rounded  '>{itemAmount}</div>
    </div>
    </div>

  </header>;
};

export default Header;
