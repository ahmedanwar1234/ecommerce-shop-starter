import React ,{useContext}from 'react';
import { Link } from 'react-router-dom';
import {BsPlus,BsEyeFill}from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext';


const Product = (props) => {

const {addToCart}=useContext(CartContext)

  const {id,image,category,title,price}=props.product
  return <div className='w-[300px] '>
    <div className='border hover:border-gray-600 border-[#e4e4e4]  h-[300px] mb-4 relative overflow-hidden group  transition'>
      <div className='w-full h-full flex justify-center items-center'>
      
        <div className=' w-[200px] mx-auto flex justify-center items-center'><img className=' max-h-[160px] group-hover:scale-110 transition duration-300' src={image}></img></div>
      </div>
<div className='absolute top-0 sm:-right-11  p-1  sm:group-hover:right-0   text-center right-1 sm:opacity-0 group-hover:opacity-100 transition-all duration-300'>
  <button onClick={()=>addToCart(props.product,id)} className='  bg-gray-800 '>
    <div className='flex justify-center w-10 h-10 items-center text-white'><BsPlus className=" text-3xl"/></div></button>
  <Link to={`/product/${id}`} className=" bg-white w-10 h-10 flex justify-center items-center text-primary drop-shadow-xl"><BsEyeFill/></Link>
</div>
    </div>

    <div>
<div>
  <div className=' text-sm capitalize text-gray-500'>{category}</div>

<Link to={`/product/${id}`}>
<h2 className=' font-semibold mb-1 over'>{title}</h2>

</Link>  <div className=' font-semibold'>${price}</div>
</div>
    </div>
  </div>;
};

export default Product;
