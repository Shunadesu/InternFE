import React from 'react'
import {Header, Nav, TopHeader, Footer} from '../../components'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import icons from '../../utilils/icon';
const CartPage = ({cartItem, addToCart, decreaseQty, removeItem}) => {
  console.log(addToCart)
  const {FaRegCircleXmark} = icons
  const navigate = useNavigate();
  const totalPrice = cartItem.reduce((price, item) => price + item.qty * item.price,0 )
  const handleClick = () => {
    if (totalPrice > 0){
      Swal.fire({
        icon: "success",
        title: "Check Out Success",
        text: "Thank you!!",
      }) 
      cartItem.map((item) => removeItem(item))
      navigate("/");
    }else{
      Swal.fire({
        icon: "error",
        title: "Your cart is empty",
        text: "Countinue to buy"
      })
      navigate("/product");
    }
  }
 
  return (
    <div className='w-full flex flex-col items-center'>
        <TopHeader/>
        <Header cartItem={cartItem}/>
        <Nav />
        <div className='w-full my-8'>
          <h1 className='my-8 px-4 text-[30px] font-bold text-red-500 border'>Your Cart</h1>
          <div className='my-4'>
            {cartItem.map((item)=>{
            const productQty = item.price * item.qty
              return(
                <div className='flex gap-2 justify-between items-center my-12 px-4'>
                  <img src={item.image} className='w-[100px] h-[100px] object-cover' />
                  <div className='line-clamp-1 w-[300px] font-bold text-[22px]'>{item.title}</div>
                  <div className='flex gap-2 justify-center items-center'>
                    <div className='bg-red-400 text-[16px] font-bold text-white p-2 px-4 cursor-pointer hover:bg-red-700' onClick={() => addToCart(item)}>+</div>
                    <div className='bg-red-500 text-[16px] font-bold text-white p-2 px-4'>{item.qty}</div>
                    <div className='bg-red-400 text-[16px] font-bold text-white p-2 px-4 cursor-pointer  hover:bg-red-700' onClick={() => decreaseQty(item)}>-</div>
                  </div>
                  <div className='font-bold text-[22px]'>{productQty}$</div>
                  <div 
                  className='bg-red-500 text-[22px] font-bold text-white p-2 px-4'
                  onClick={() => removeItem(item)}>
                  <FaRegCircleXmark size={24}/>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='flex justify-end items-center'>
            <div className='p-4 flex justify-end text-[24px] font-bold'>
              {Math.floor(totalPrice)===0 ? 'Your cart is empty' : `Total: ${Math.floor(totalPrice)}$`}
            </div>
            <div 
            onClick={()=> {
              handleClick()
            }}
            className='text-[24px] font-bold cursor-pointer px-4 bg-red-400 text-white hover:bg-red-700'
            >
              Check out
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default CartPage