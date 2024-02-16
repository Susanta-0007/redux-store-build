import React from 'react'
import { Link } from 'react-router-dom';
import { UseSelector, useSelector } from 'react-redux';


const Navbar = () => {

    const items=useSelector((state)=>state.cart)

    return (
        <>
        <div className='w-[90%] m-auto flex justify-between border-b-2 border-purple-900 pb-2'>
            <div className='text-2xl font-bold text-purple-800'>Redux Store</div>
            <div className='flex justify-between w-[30%] text-xl font-semibold'  >
                <div>
                    <Link to={"/"} >Home</Link>
                </div>
                <div>
                    <Link to={"/cart"}>Cart</Link>
                </div>
                <div>
                    <Link>Cart items - {items.length} </Link>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Navbar;