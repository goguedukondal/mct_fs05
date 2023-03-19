import React, { useEffect, useState } from 'react'
import "./Product.css"


const Product = () => {
  const [data,setData] =useState()
useEffect(()=>{
  fetch(` https://fakestoreapi.com/products/categories`).then((res)=>res.json()).then((data)=>{setData(data);})
},[])
 console.log(data)
  return (
    <div className='product_container'>
    <div className='left_panel'>
      left panel
    </div>
    <div className='right_panel'>
     right apanel
    </div>
    </div>
  )
}

export default Product