import React, { useEffect, useState } from 'react';
import Navbar from './navbar/Navbar';
import {storeProducts} from './data/Data'
import Product from './product/Product';
import './Index.scss';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Details from './product/Details';
import Shop from './product/Shop';
import About from './product/About';

const Index = () => {

  let [data, setData] = useState(storeProducts);
  let [products, setProducts] = useState([]);
  let [counter, setCounter] = useState([]);
  let [details, setDetails] = useState('');
  let [id, setId] = useState('');

  const handleCard = (id) => {
    let inCart = data.map(item=>item.id===id?{...item, inCart: !item.inCart, count: item.count===0?1:0}:item);
    setData(inCart)
  }

  const handleDetails = (id) => {
    setDetails(data.filter(item=>item.id===id&&item));
    setId(id)
  }

  useEffect(()=>{
    let coun = [0, 0];
    let product = [];
    data.forEach(item=>{
      if(item.inCart)coun[0]+=1;
      coun[1]+=item.count;
      if(item.count>0)product.push(item);
    })
    handleDetails(id);
    setProducts(product);
    setCounter(coun);
  },[data])

  const handleCount = (e,id) => {
    let name = e.target.className;
    let coun = data.map(i=>i.id!==id?i:name==='inc'?{...i,count:i.count+1}:i.count>1?{...i,count:i.count-1}:{...i,count: 0, inCart: false});
    setData(coun);
  }

  const handleClear = () => {
    setData(data.map(i=>{return{...i,count:0, inCart: false}}))
  }

  const handleRemove = (id) => {
    let remove = data.map(item=>item.id===id?{...item, inCart: false, count: 0}:item)
    setData(remove);
  }

  return (
    <div className='container'>
      <Router>
            <Navbar count={counter[0]} />
        <Switch>
          <Route exact path='/'>
            <Product handleCard={handleCard} data={data} handleDetails={handleDetails} /></Route >
          <Route path='/details'>
            <Details details={details} handleCard={handleCard} /></Route>
          <Route path='/shop'>
            <Shop handleClear={handleClear} handleRemove={handleRemove} products={products} handleCount={handleCount} /></Route>
          <Route path='/about'>
            <About /></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default Index
