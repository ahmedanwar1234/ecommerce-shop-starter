import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {IoMdAdd, IoMdClose, IoMdRemove}from 'react-icons/io'
import { CartContext } from '../contexts/CartContext';
const CartItem = ({item}) => {
  const {removeFromCart,increaseAmont,decreaseAmount}=useContext(CartContext)
  const {id,title,image,price,amoutn}=item
  return <div className=' w-full gap-x-4 py-2 lg:px-6 border-b border-gray-200 font-light text-gray-500'>
<div className=' w-full min-h-[150px] flex items-center  gap-x-4'>
  <img src={image} className=' max-w-[80px]' />

<div className='w-full '>
<div className='w-full flex justify-between mb-2'>





<h1 className=' text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>  {title}</h1>
<div className=' text-xl cursor-pointer'>

  <IoMdClose onClick={()=>removeFromCart(id)} className="  font-bold text-gray-500 hover:text-red-500 transition"/>

</div>





</div>
<div className='  flex items-center justify-between gap-x-2 h-[36px]'>
<div className=' flex flex-1 max-w-[100px]  text-gray-900 items-center h-full border font-medium'>
<div onClick={()=>decreaseAmount(id)} className=' flex-1  h-full flex justify-center items-center cursor-pointer ' >
  <IoMdRemove />
</div>
<div className=' h-full flex justify-center items-center px-2'>{amoutn}</div>

<div onClick={()=>increaseAmont(id)} className=' flex-1 h-full flex justify-center items-center cursor-pointer '>
  < IoMdAdd />
</div>
</div >

<div className=''>$ {price} </div>

<div className=' font-medium'>$ {parseFloat(price*amoutn).toFixed(2)}</div>
</div>

</div>
</div>
  </div>;
};

export default CartItem;
