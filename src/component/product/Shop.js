import React from 'react';
import {RiDeleteBin6Line} from 'react-icons/ri'
import { Link } from 'react-router-dom';
import Total from './Total';

const Shop = ({handleClear, products, handleCount, handleRemove}) => {
  return (
    <div className='shop'>
      <h1><span>Your</span> Cart</h1>
      <div className='cart'>
      {products.length>0
      ?products.map(item=><div>
        <img src={item.img} alt={item.title} />
        <h4>{item.title}</h4>
        <h4>$ {item.price}</h4>
        <div>
          <span className='dec' onClick={(e)=>handleCount(e,item.id)}>-</span>
          <span>{item.count}</span>
          <span className='inc' onClick={(e)=>handleCount(e,item.id)}>+</span>
        </div>
        <RiDeleteBin6Line className='icon' onClick={()=>handleRemove(item.id)} />
      </div>)
      :<div className='empty'>
        <h3>No Product Selected</h3>
        <Link to='/'>Back To Shop</Link>
      </div>}
    </div>
      <Total products={products} />
      <button onClick={()=>handleClear()}>Clear</button>
    </div>
  )
}

export default Shop
