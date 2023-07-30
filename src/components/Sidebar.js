import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import {IoMdArrowForward}from 'react-icons/io'
import {FiTrash2}from 'react-icons/fi'
import CartItem from '../components/CartItem'
import { SidebarContext } from '../contexts/SidebarContext';
import CartProvider, { CartContext } from '../contexts/CartContext';



const Sidebar = () => {
  const {cart,clearCart,itemAmount,total}=useContext(CartContext)
  const {isOpen,setIsOpen,handleClose}=useContext(SidebarContext)
  return <div className={`${isOpen ? "right-0":"-right-full"}  w-full bg-white fixed top-0 h-full  shadow-2xl  md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
  <div className='flex items-center justify-between py-6 border-b'>
    <div className=' uppercase text-sm font-semibold'>Shopping Bag (0)</div>
    <div onClick={()=>setIsOpen(!isOpen)} className=' cursor-pointer w-8 h-8 flex justify-center items-center'>
      <IoMdArrowForward className=" text-2xl"/>
    </div>
    </div>  
    


    <div className='  flex flex-col gap-y-2  h-[520px] lg:h-[640px] overflow-y-auto border-b '>

{cart.map((item)=>{return<CartItem key={item.id} item={item}></CartItem>})}
    </div>
    <div  className=' flex flex-col gap-y-3 py-4 mt-4 '>
      
      <div  className=' flex w-full justify-between items-center'>
      <div className=' uppercase font-semibold'><span className='mr-2'>Total</span> $ {total}</div>
<div onClick={()=>clearCart()} className=' cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center'><FiTrash2/></div>
      </div>
      <div to="/" className=" cursor-pointer bg-grau-200 flex p-4  justify-center item-center text-primary w-full font-medium">
      View cart 
      </div>
      <div to="/" className=" cursor-pointer bg-primary flex p-4  justify-center item-center text-white w-full font-medium">
     Checkout
      </div>

      </div>
  </div>;
};

export default Sidebar;
