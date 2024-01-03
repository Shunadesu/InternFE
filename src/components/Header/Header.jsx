import React, {memo} from 'react'
import icons from '../../utilils/icon'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import path from '../../utilils/path'
import withBaseComponent from '../../app/withBaseComponent'
import  {showCart}  from '../../app/appSlice'
import { useDispatch } from 'react-redux'

const Header = ({cartItem}) => {
  const totalQty = cartItem.reduce((price, item) => item.qty + item.qty,0)
  console.log(totalQty)
  //icons
  const {FaPhoneAlt, MdMail, FaShoppingBag, FaUserCircle} = icons
  const dispatch = useDispatch()
  return (
    <div className='w-full flex justify-between h-[110px] py-[35px] lg:px-[30px]'>
      <div className='w-[234px] object-contain'>
        <Link to={`/${path.HOME}`}>
          <img src={logo} alt="logo" className='w-full'/>
        </Link>
      </div>
      <div className='flex text-[13px]'>
        <div className='flex flex-col px-6 text-center border-r lg:hidden '>
          <span className='flex gap-2 justify-center items-center'>
            <FaPhoneAlt color='red'/>
            <span className='font-semibold'> (+1800) 000 8808 </span>
          </span>
          <span>
            Mon-Sat 9:00AM - 8:00PM
          </span>
        </div>
        <div className='flex flex-col px-6 text-center border-r lg:hidden'>
          <span className='flex gap-2 justify-center items-center'>
            <MdMail color='red' />
            <span className='font-semibold'> SUPPORT@TADATHEMES.COM </span>
          </span>
          <span>
            Online Support 24/7
          </span>
        </div>
        <div
          onClick={() => dispatch(showCart())}
          className='flex items-center gap-2 justify-center px-6 border-r '>
          <FaShoppingBag color='red'/>
          <span className=''>
          
                <div>
                  {totalQty ? totalQty/2 : 0} item (s)
                </div>
              
          </span>
        </div>
        <div className='flex items-center px-6 justify-center gap-2'>
          <FaUserCircle color='red' size={24}/>
        </div>
      </div>
    </div>
  )
}

export default withBaseComponent(memo(Header))