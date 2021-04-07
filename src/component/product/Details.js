import React from 'react'
import { Link } from 'react-router-dom';

const Details = ({details, handleCard}) => {

  let {id, img, info, title, price, inCart} = details[0];
console.log(inCart)
  return (
    <div key={id} className='details'>
      <h1>{title}</h1>
      <img src={img} alt={title} className='img' />
      <div>
        <h2>Model: {title}</h2>
        <h3>MADE BY: {title}</h3>
        <h3>Price: {price} $</h3>
        <h5>Info About Product: {info}</h5>
      </div>
      <h1>
        <Link to="/">Back to Products</Link>
        <Link  onClick={()=>handleCard(id)}>{inCart?'In Cart':'Add To Cart'}</Link>
      </h1>
      {inCart&&<div className='model'>
      <div>
      <h1>{title}</h1>
      <img src={img} alt={title} />
      <h3>Price: {price} $</h3>
      <Link to='/'>Continue Shopping</Link>
      <Link to='shop'>Go To Cart</Link>
      </div>
        </div>}
    </div>
  )
}

export default Details
