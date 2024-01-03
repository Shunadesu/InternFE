import React from 'react'
import icons from '../../utilils/icon'
import { Link } from 'react-router-dom'
import path from '../../utilils/path'
const Products = ({productData, isNew, addToCart}) => {
  const {FaRegStar} = icons
  return (
      <Link
      to={`/${path.DETAIL_PRODUCT}/${productData?.id}/${productData?.title}`}
      className="flex p-4 flex-col gap-4 justify-center h-[450px] border mx-2 relative">
        <div className='ml-12 px-4 w-[150px] h-[250px] flex items-center justify-center'>
          <img src={productData?.image || 'https://previews.123rf.com/images/stuartphoto/stuartphoto1206/stuartphoto120600282/14055075-coming-soon-stamp-showing-new-product-arrivals.jpg'} alt="" className='object-cover' />
        </div>
        <div 
        className={isNew ? 'absolute bg-blue-600 text-white top-6 left-0 px-4 rounded-e-lg text-[18px]' : 'absolute bg-red-600 text-white top-6 left-0 px-4 rounded-e-lg text-[18px]' }        
        >{isNew ? 'New Arrivals': 'Best Seller'}</div>
        <div className='px-4'>
          <span className='line-clamp-1'>{productData?.title}</span>
        </div>
        <span className='px-4 text-red-500 text-[18px]'>Price: {productData?.price}$</span>
        <div className='flex px-4 gap-2 items-center'>
          <span className=''>Rating: {productData.rating.rate} </span>
          <FaRegStar className='text-yellow-500'/>
        </div>
      </Link>
  )
}

export default Products