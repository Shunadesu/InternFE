import {React, useEffect, useState} from 'react'
import icons from '../../utilils/icon'
import Countdown from './Countdown'
import { fetchProduct } from '../../apis/Service'
const DealDaily = () => {
const {FaRegStar, AiOutlineMenu} = icons
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
    let deal = product[Math.round(Math.random() * product.length)];
  return (
    <div className='sm:p-0 p-4 border w-full flex-auto justify-center items-center sm:justify-center sm:text-center'>
        <div className="flex items-center gap-6">
            <FaRegStar size={18} color='#DD1111' className='sm:hidden'/> 
            <span className=' font-bold text-[20px] sm:text-[18px] sm:text-red-500 sm:px-2'>Deal Daily</span> 
        </div>
        
        <div className="flex flex-col mt-4 justify-center items-center gap-4">
            <img src={deal?.image} alt="deal image" className='p-4 w-[250px] h-[300px] object-cover sm:w-[150px] sm:h-[150px]' />
            <span className='line-clamp-1 px-4 sm:px-2'>{deal?.title}</span>
            <span className='px-4 text-red-500 text-[18px] sm:px-2'>Price: {deal?.price}$</span>
            <div className='flex gap-2 items-center'>
              <span className=''>Rating: {deal?.rating.rate} </span>
              <FaRegStar className='text-yellow-500'/>
            </div>
        </div>
        
        <div className="px-4 mt-8 sm:px-0">
        <div className="flex justify-center items-center gap-2 mb-4 sm:flex-col">
          <Countdown unit={'Hours'} />
          <Countdown unit={'Minutes'}/>
          <Countdown unit={'Seconds'}/>
        </div>
        <button
          type="button"
          className="sm:px-2 sm:text-[16px] flex gap-2 py-2 items-center justify-center w-full bg-main hover:bg-gray-800 text-white font-medium"
        >
          <AiOutlineMenu className='sm:hidden' />
          <span>Options</span>
        </button>
      </div>
        
    </div>
  )
}

export default DealDaily