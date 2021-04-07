import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

const Total = ({products}) => {

  let total = [0,0];
  products.forEach(i=>{
    total[0]+=i.count;
    total[1]+=i.count*i.price;
  });
  console.log(total)

  return (
    <div className='total'>
      <h4>Item Total: {total[0]}</h4>
      <h3>SUBTOTAL: {(total[1]).toFixed(2)} $</h3>
      <h3>TAX: {(total[1]*0.1).toFixed(2)} $</h3>
      <h3>TOTAL: {(total[1]*1.1).toFixed(2)} $</h3>
      <PaypalExpressBtn />
    </div>
  )
}

export default Total
