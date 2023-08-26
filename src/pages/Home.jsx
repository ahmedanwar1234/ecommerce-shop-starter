import React ,{useContext}from 'react';
import { ProductContext } from '../contexts/ProductContext';
import './home.css'
import Product from '../components/Product'
import Hero from '../components/Hero';
const Home = () => {
  const {products}=useContext(ProductContext)
console.log(products)
const filteredProducts=products.filter(item=>{
  return item.category==="men's clothing"|| item.category==="women's clothing"})
  console.log(filteredProducts)


  

  return <div className=' '>
<Hero/>


<section className='padding_section'>
<div className="container">
<div className='gridd'>
  {filteredProducts.map((product)=>{
return <Product product={product} key={product.id} />
  })}
</div>



</div>

  </section>    
   </div>;
};

export default Home;
