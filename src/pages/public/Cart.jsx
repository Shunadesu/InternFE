import React, { memo } from 'react'
import icons from '../../utilils/icon'
import { showCart } from '../../app/appSlice'
import { useDispatch } from 'react-redux'
import withBaseComponent from '../../app/withBaseComponent'
import { Link } from 'react-router-dom'
import path from '../../utilils/path'

const Cart = ({cartItem, addToCart, decreaseQty, removeItem}) => {
  const dispatch = useDispatch();
  const { FaRegCircleXmark, AiOutlineMenu } = icons
  const totalPrice = cartItem.reduce((price, item) => price + item.qty * item.price,0 )
  return (
    <div onClick={e => e.stopPropagation()} className='sm:w-[60%] w-[40%] max-h-screen overflow-y-auto bg-black text-white p-6'>
        <h1 className='py-4 border-b flex justify-between items-center font-bold text-2xl lg:text-[18px] sm:text-[16px] sm:uppercase'>
           <span>Your Cart</span> 
           <span 
           onClick={() => dispatch(showCart())} 
           className='cursor-pointer p-2'>
            <FaRegCircleXmark size={24} />
           </span>
        </h1>
        <div className='flex h-[90%] flex-col justify-between'>
        <div>
        {cartItem.map((item)=>{
        const productQty = item.price * item.qty
          return(
            <div className='flex my-4 gap-4 items-center'>
              <div className='line-clamp-1 w-1/2'>{item.title}</div>
              <div className='w-[10%]'>{item.qty}</div>
              <div className='w-[10%]'>{productQty}$</div>
              <div className='w-[30%] flex gap-2'>
                <div className='bg-red-500 text-[14px] font-bold px-2 cursor-pointer hover:bg-red-700' onClick={() => addToCart(item)}>+</div>
                <div className='bg-red-500 text-[14px] font-bold px-2 cursor-pointer hover:bg-red-700' onClick={() => decreaseQty(item)}>-</div>
                <div 
                className='bg-red-500 text-[14px] font-bold px-2 flex items-center cursor-pointer hover:bg-red-700'
                onClick={() => removeItem(item)}>
                <FaRegCircleXmark /></div>
              </div>
            </div>
          )
        })}
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex justify-between font-bold text-[22px]'>
            <span>Total Price:</span> 
            {Math.floor(totalPrice)}$
          </div>
          <Link 
          onClick={() => dispatch(showCart())}
          className='bg-red-500 p-4 text-[22px] flex gap-2 justify-center items-center font-bold lg:text-[18px] sm:text-[16px] sm:uppercase'
          to={`/${path.CART}`}
          >
            <span>Cart</span> 
            <AiOutlineMenu />
          </Link>
          <Link 
          onClick={() => dispatch(showCart())}
          className='bg-red-500 p-4 text-[22px] flex gap-2 justify-center items-center font-bold lg:text-[18px] sm:text-[16px] sm:uppercase'
          to={`/${path.PRODUCTS}`}
          >
            <span>Products</span> 
            <AiOutlineMenu />
          </Link>
        </div>
        </div>
    </div>
  )
}

export default withBaseComponent(memo(Cart))