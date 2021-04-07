import React from 'react';
import './Navbar.scss';
import { FaPhoneSquare } from 'react-icons/fa';
import { MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navbar = ({count}) => {
  return (
    <div className='navbar'>
      <Link to="about"><FaPhoneSquare style={phone} /></Link>
      <Link to='/'>Product</Link>
      <Link to='shop'><MdShoppingCart style={shop} /></Link>
      <span className='total'>{count}</span>
    </div>
  )
}

export default Navbar

let phone = {color:'#74a674', background:'white', fontSize:'35', cursor:'pointer'};
let shop = {color:'white', fontSize:'30'}
