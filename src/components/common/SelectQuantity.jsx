import {React, memo} from 'react'

const SelectQuantity = ({quantity, handleQuantity, handleChangeQuantity}) => {
  return (
    <div className='flex items-center gap-2'>
      <span onClick={() => handleChangeQuantity('minus')} className='text-[24px] cursor-pointer p-2'>-</span>
      <input 
      type="number" 
      className='py-2 px-4 outline-none w-[100px] text-center'
      value={quantity}
      onChange={e => handleQuantity(e.target.value)}
      />
      <span onClick={() => handleChangeQuantity('plus')}  className='text-[24px] cursor-pointer p-2'>+</span>
    </div>
  )
}

export default memo(SelectQuantity)