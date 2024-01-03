import React, {useState, useCallback, memo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { SelectQuantity } from '../../components'
import Swal from 'sweetalert2'
const DetailProducts = ({product, addToCart}) => {
  const navigate = useNavigate();

  const {id} = useParams()
  const [quantity, setQuantity] = useState(1);

  let check = product.filter((item) => item.id == id)
  
  const handleQuantity = useCallback((number) => {      
    if(!Number(number) || Number(number)<1) {
    } else setQuantity(number)
  },[quantity])
 
  const handleChangeQuantity = useCallback((flag)=>{
    if(flag === 'minus' && quantity === 1) return
    if(flag === 'minus') setQuantity(prev => prev - 1)
    if(flag === 'plus') setQuantity(prev => prev + 1)
  }, [quantity])


  const handleClick = () =>{
    let token = localStorage.getItem("token");
    if(!token){
      Swal.fire({
        icon: "info",
        title: "Almost...",
        text: "Please Login First",
      }) 
      navigate("/");
    }else{
      Swal.fire({
        icon: "success",
        title: "Adding Success",
        text: "Check Your Cart",
      }) 
    }
  }

  return (
    <div>
      {
        check.map((item) =>{
          
          return (
            <div className='w-full'>
              <div className="w-full mt-8 px-4">
                <h1 className='my-8 px-4 text-[30px] font-bold text-red-500 border hover:text-red-500 capitalize'>Category: {item.category}</h1>
              </div>
              <div className="w-full mt-8 px-4 items-center flex lg:flex-col">
                <div className='my-8 flex flex-1 items-center justify-center'>
                  <img src={item?.image} alt="item" className='h-[458px] w-[458px] object-contain p-4' />
                </div>
                <div className='flex flex-col flex-1 gap-2 px-4'>
                  <div className='flex flex-col gap-2'>
                    <span className='font-bold text-[30px]'>{item?.title}</span>
                    <span className='text-yellow-500 text-[20px]'>Rating: {item?.rating.rate} star</span>
                    <span className='capitalize text-sm'>{item?.description}</span>
                  </div>
                  <div className='w-full my-4 flex gap-8 items-center'>
                    <span className='font-bold text-[24px] text-red-400'>Price: {item?.price}$</span>
                    <div 
                    onClick={()=> {
                      handleClick()
                      addToCart(item)
                    }}
                    className='flex items-center justify-center cursor-pointer p-4 text-white bg-red-500 rounded-lg text-center font-bold hover:text-red-500 hover:bg-white hover:border'>
                        Add to Cart
                    </div> 
                  </div>
                  <div >  
                    {/* <SelectQuantity quantity={quantity} handleQuantity={handleQuantity} handleChangeQuantity={handleChangeQuantity}/> */}
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default memo(DetailProducts)