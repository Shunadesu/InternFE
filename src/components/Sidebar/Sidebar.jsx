import React, { useEffect, useState } from 'react'
import { sideBarApi } from '../../apis/Service'
import { NavLink } from 'react-router-dom'
import path from '../../utilils/path'
const Sidebar = () => {
  
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

  return (
    <div className='flex flex-col gap-2 pr-4 h-[400px] justify-around'>
    <div className='bg-red-500 text-white transition-all border text-[18px] capitalize p-4 lg:p-2 lg:text-[16px] sm:text-[14px]'>all collection</div>
      {
        filterBar && filterBar.length > 0 && 
        filterBar.map((item) => 
        {
          return(
            <NavLink 
              key={item.category}
              to={`${path.PRODUCTS}`}
              className={({ isActive }) =>  isActive ? 'bg-red-500 text-white transition-all text-[18px] capitalize p-4 hover:text-main' : 'text-[18px] capitalize p-4 hover:text-main lg:text-[16px] lg:p-2 sm:text-[14px]'}
            >
                {item.category}
              
            </NavLink>
          )
        })
      }
    </div>
  )
}

export default Sidebar