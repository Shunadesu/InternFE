import {React, useEffect, useState} from 'react'
import { fetchProduct } from '../../apis/Service'
import Products from './Products'
import Slider from 'react-slick'

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

const tabs = [
    {
        id:1,
        name: 'best seller'
    },
    {
        id:2,
        name: 'new arrivals'
    },
]


const BestSeller = ({addToCart, product}) => {

    // const [product, setProduct] = useState([]);
    const [activeTab, setActiveTab] = useState(1);
    const [newArrial, setNewArrival] = useState('');

    // useEffect(() =>{
    //     getProduct();
    //   }, [])
    
    // const getProduct = async () => {
    //   let res = await fetchProduct();
      
    //   if(res && res.data){
    //       setProduct(res.data);
    //   }
    // }

  const fillterBestSeller = product.filter(item => item.rating.rate > 4)

  return (
    <div>
        <div className='sm:text-[16px] flex text-[20px] gap-8 pb-4 border-b-2 border-main'>
            {
                tabs.map((ele) => 
                    <span 
                    key={ele.id} 
                    className={`font-semibold capitalize cursor-pointer pr-8 border-r text-gray-300 ${activeTab === ele.id ? 'text-gray-900' : ''}`}
                    onClick={()=>setActiveTab(ele.id)}

                    >{ele.name}</span>
                )
            }
        </div>
        <div className='w-full mt-4'>
          <Slider {...settings}>
          {  
            activeTab===1 && fillterBestSeller && fillterBestSeller.length && fillterBestSeller.map((item) => {
                  return(
                      <div className='flex justify-center items-center'>
                          <Products key={item.id}
                            addToCart={addToCart}     
                            productData={item}
                          />
                      </div>
                  )
            })  
          }
          
          {  
            activeTab===2 && product && product.length && product.map((item) => {
                  return(
                      <div className='flex justify-center items-center'>
                          <Products key={item.id}
                            addToCart={addToCart}
                            productData={item}
                            isNew={activeTab===1 ? false : true}
                          />
                      </div>
                  )
            })  
          }
          </Slider>
        </div>
        <div className="w-full cursor-pointer flex gap-4 mt-4 px-2 lg:flex-col">
          <img
            src="https://digital-world-2.myshopify.com/cdn/shop/files/banner2-home2_2000x_crop_center.png?v=1613166657"
            alt="banner"
            className="flex-1 object-contain sm:hidden"
          />
          <img
            src="https://digital-world-2.myshopify.com/cdn/shop/files/banner1-home2_2000x_crop_center.png?v=1613166657"
            alt="banner"
            className="flex-1 object-contain"
          />
        </div>
    </div>
  )
}

export default BestSeller