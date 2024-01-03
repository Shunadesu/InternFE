import React from 'react'
import {Sidebar, Banner, BestSeller, DealDaily} from '../../components'

const Home = ({addToCart, product}) => {
  return (
    <div className='w-full flex mt-8 lg:px-[30px]'>
        <div className='flex flex-col gap-5 w-[25%] flex-auto'>
            <Sidebar />
            <DealDaily/>
        </div>

        <div className='flex flex-col gap-5 pl-5 w-[75%] flex-auto'>
            <Banner />
            <BestSeller addToCart={addToCart} product={product}/>
        </div>
    </div>
  )
}

export default Home