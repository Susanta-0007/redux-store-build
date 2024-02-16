import React from 'react'
import { useDispatch, useSelector } from "react-redux"

import { remove } from '../store/cartSlice';


const Cart = () => {
  const dispatch=useDispatch();

  const products = useSelector((state) => state.cart);

  const handleRemove=(productId)=>{
      dispatch(remove(productId));
  }


  return (
    <div>
      <h1 className='text-gray-400 text-2xl text-center font-semibold'>Cart</h1>
      <div className='flex flex-col  gap-5 w-[90%] m-auto'>
        {
          products.map((product) => (
            <div className='border-[2px] border-gray-400 border-solid flex gap-5 p-5'>
              <img className='h-[100px] w-[100px]' src={product.image} />
              <div className='flex flex-col gap-2 justify-center'>
                <p className='text-xl font-semibold text-gray-400'>{product.title}</p>
                <p className='text-xl font-semibold'>₹{product.price}</p>
              </div>
              <button 
                    onClick={()=>handleRemove(product.id)}
                    className='p-2 bg-red-500 h-[40px] mt-5  rounded-md text-white '>Remove</button>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Cart