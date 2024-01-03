import React, {useEffect, useState} from 'react'
import { sideBarApi } from '../../apis/Service'
import { Link } from 'react-router-dom'
import icons from '../../utilils/icon'
import path from '../../utilils/path'

const Products = () => {
  
  const [isActive, setIsActive] = useState(false);
  const [listBar, setListBar] = useState([])

  useEffect(() =>{
    getSidebar();
  }, [])

  const getSidebar = async () => {
    let res = await sideBarApi();
    
    if(res && res.data){
      setListBar(res.data)
    }
  }

  const seenCate =[];
  const filterBar = listBar.filter((item) => {
    if(seenCate.includes(item.category)){
      return false;
    }else{
      seenCate.push(item.category);
      return true;
    }
  })

  const {FaRegStar} = icons


  return (
    <div className='flex gap-2 flex-col'>
    <div className='my-8 px-4 text-[30px] font-bold text-red-500 border'>Products</div>
    <div className='grid grid-cols-3 lg:grid-cols-2'>
      {
        listBar.map((item)=>{
          return(
            <Link
            to={`/${path.DETAIL_PRODUCT}/${item?.id}/${item?.title}`}
             className='flex p-4 flex-col gap-4 justify-center h-[450px] mx-2'>
            <div className='ml-12 px-4 w-[150px] h-[250px] flex items-center justify-center'>
            <img src={item?.image || 'https://previews.123rf.com/images/stuartphoto/stuartphoto1206/stuartphoto120600282/14055075-coming-soon-stamp-showing-new-product-arrivals.jpg'} alt="" className='object-cover' />
            </div>
            <div className='px-4'>
            <span className='line-clamp-1'>{item?.title}</span>
            </div>
            <span className='px-4 text-red-500 text-[18px]'>Price: {item?.price}$</span>
            <div className='flex px-4 gap-2 items-center'>
            <span className=''>Rating: {item.rating.rate} </span>
            <FaRegStar className='text-yellow-500'/>
            </div>
            </Link>
          )
          
        })
      }
    </div>
    </div>
  )
}

export default Products