import React, { useEffect, useState } from 'react'
import {useDispatch} from "react-redux";

import {add} from "../store/cartSlice"

const Products = () => {
    const dispatch=useDispatch();

    const [products, setProducts] = useState([]);
    const API = "https://fakestoreapi.com/products";

    useEffect(() => {
        fetchProductsData();

    }, [])

    const fetchProductsData = async () => {
        const responce = await fetch(API);
        const data = await responce.json();
        setProducts(data);
    }


    const handleAdd=(product)=>{
        dispatch(add(product));
    }

    return (
        <div className=' justify-center flex flex-wrap gap-5 '> 
            {products.map((product) => (
                <div key={product.id} className='w-[300px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl  '>
                    <img className='h-[200px] w-[80%]  m-auto' src={product.image} alt={product.title} />
                    <p className='text-gray-500 font-semibold w-[90%] text-center pt-2'>{product.title.substring(0, 30)}</p>
                   
                    <div className='flex w-[90%]  mb-2 m-auto pt-2'>
                    <p className='p-2 border-gray-300 border-[2px] rounded-md w-[40%] text-xl'>₹{product.price}</p>
                    <button 
                    onClick={()=>handleAdd(product)}
                    className='w-[50%] p-2 bg-green-500  m-auto rounded-md text-white '>Add To Cart</button>
                    </div>
                   
                </div>
            ))}
        </div>
    )
}

export default Products