import React, { createContext ,useEffect,useState} from 'react';
import { BsTable } from 'react-icons/bs';

export const CartContext=createContext();



const CartProvider = ({children}) => {
  const [cart,setCart]=useState([])

  const [itemAmount,setItemAmount]=useState(0)

  const [total,setTotal]=useState(0)
  
   useEffect(()=>{
const amount=cart.reduce((accumulator,currentItem)=>{
  return accumulator + currentItem.amoutn

},0)
setItemAmount(amount)
   },[cart])




  const addToCart=(product,id)=>{
    const newItem={...product,amoutn:1}
  const cartItem=cart.find((item)=>{
    return item.id ===id;
  })

  if(cartItem){
    const newCart=[...cart].map((item)=>{
      if(item.id===id){
return {...item,amoutn:cartItem.amoutn+1}
    }else{
      return item
    }
  
  })
  setCart(newCart)
}else{
   setCart([...cart,newItem])
  }
  }

const removeFromCart=(id)=>{
  const newCart=cart.filter((item)=>{
    return item.id!==id
  })
  setCart(newCart)
}

const clearCart=()=>{
  setCart([])
}

const increaseAmont=(id)=>{
  const item=cart.find(item=>item.id===id)
addToCart(item,id)
}

const decreaseAmount=(id)=>{
  const item=cart.find(item=>item.id===id)
 if(item){
  const newCart =cart.map((item)=>{
    if(item.id===id){
      return {...item,amoutn :item.amoutn - 1}
    }
  }
  
  ) 
  setCart(newCart)
 }{
  if(item.amoutn <2){
    removeFromCart(id)
  }
 }



}
const summAmount=()=>cart.reduce((first,sec)=>{

  return( first.amoutn + sec.amoutn)
},0)
console.log(summAmount())



useEffect(()=>{
  const total=cart.reduce((accumulator,currentItem)=>{
    return accumulator +currentItem.price *currentItem.amoutn
  },0)
  setTotal(parseInt(total))
},[cart])




  return <CartContext.Provider value={{total,addToCart,cart,removeFromCart,clearCart,increaseAmont,decreaseAmount,itemAmount}}>{children}</CartContext.Provider>;
};

export default CartProvider;
