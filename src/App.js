import React, { useEffect, useState } from 'react';
import {Route, Routes} from 'react-router-dom'
import {Login, Home, Public, Products, DetailProducts, Cart, CartPage } from './pages/public'
import path from './utilils/path';
import  {showCart}  from './app/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from './apis/Service';
function App() {
  const dispatch = useDispatch()
  const { isShowCart } = useSelector(state => state.app);
  const [cartItem, setCartItem] = useState([])
  const [product, setProduct] = useState([]);
  
  useEffect(() =>{
    getProduct();
  }, [])

  const getProduct = async () => {
    let res = await fetchProduct();
    
    if(res && res.data){
        setProduct(res.data);
    }
  }

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)

    if(productExit){
      setCartItem(cartItem.map((item) =>
       (item.id === product.id?
        {... productExit, qty:productExit.qty+1} 
        : item )))
    }
    else{
      setCartItem([... cartItem, {...product, qty:1}])
    }
  }

  const decreaseQty = (product) =>{
    const productExit = cartItem.find((item) => item.id === product.id)
    if(productExit.qty === 1){
      setCartItem(cartItem.filter((item) => item.id !== product.id))
    }else{
      setCartItem(cartItem.map((item) =>
       (item.id === product.id?
        {... productExit, qty:productExit.qty-1} 
        : item )))
    }
  }

  const removeItem = (product) =>{
    setCartItem(cartItem.filter((item) => item.id !== product.id))
  }

  return (
    <div className="min-h-screen font-main relative">
      {
        isShowCart && 
          (<div 
          onClick={() => dispatch(showCart())}
          className='absolute inset-0 bg-overlay z-50 flex justify-end right-0'>
            <Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} removeItem={removeItem}/>
          </div>)
      }
      
      <Routes>
        <Route path={path.PUBLIC} element={<Public cartItem={cartItem} />}>
          <Route path={path.HOME} element={<Home addToCart={addToCart} product={product} />} />
          <Route path={path.PRODUCTS} element={<Products product={product} cartItem={cartItem}/>} />
          <Route path={path.DETAIL_PRODUCT__ID__TITLE} element={<DetailProducts cartItem={cartItem} product={product} addToCart={addToCart} />} />
          <Route path={path.DETAIL_PRODUCT} element={<Products product={product} />} />
        </Route>
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.CART} element={<CartPage cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} removeItem={removeItem} />} />
      </Routes>
    </div>
  );
}

export default App;
