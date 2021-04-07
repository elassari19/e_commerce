import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

import './product.scss'

const Product = ({handleCard, data, handleDetails}) => {

  return (
    <div className='card'>
      <h1 style={{width:'100%', textAlign:'center', marginBottom:'15px'}}>Our Products</h1>
      {data&&data.map(item=>{
        return(
          <div key={item.id}>
            <div >
              <Link to="details" onClick={()=>handleDetails(item.id)}>
              <img src={item.img} alt={item.title} />
              </Link>
              <div className='icon' onClick={()=>handleCard(item.id)}>
                <MdAddShoppingCart />
                <h6>{item.inCart?'inCart':'Add'}</h6>
              </div>
            </div>
            <div>
              <h2>{item.title}</h2>
              <h2>{item.price} $</h2>
            </div>
            {item.inCart&&<div className='store'>
              <Link to='shop'>CheckOut</Link>
              <Link onClick={()=>handleCard(item.id)}>Remove</Link>
            </div>}
          </div>
        )
      })}
    </div>
  )
}

export default Product
