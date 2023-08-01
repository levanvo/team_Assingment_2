import React from 'react'
import { useAppSelector, useAppDispatch } from "../store/useHookProducts";
import { VscSettings } from "react-icons/vsc"
import { Link } from 'react-router-dom';
import { FcCancel } from "react-icons/fc";
import { MdOutlineCancel } from "react-icons/md"

const Home = () => {
    const { products, isLoading, error } = useAppSelector((state: any) => state.products);

    return (
        <div className='non-selectable'>
            <div className="w-40 ml-[10%] pt-5">
                <Link to={`management`}>
                    <button className='w-40 shadow-lg pt-2 flex justify-center pb-2 shadow-gray-600 rounded-full p-1 active:translate-y-[-3px] active:scale-90 text-gray-200 management text-center font-bold text-2xl'>
                        <span className=''><VscSettings /></span>
                    </button>
                </Link>
            </div>
            {/* <div className="w-[100vw] h-16 navbar flex">
                <img className='w-16' src="../../kisspng-book-clip-art-vector-books-5aa7e4180d5d73.8052949015209523440548.png" alt="" />
            </div> */}
            <p className='text-center text-gray-600 font-bold text-4xl pt-10'>Collection to about science books</p>
            <div className="w-[90vw] mx-auto pt-[42px] pb-5">
                <div className="flex justify-center flex-wrap space-x-5">
                    {products?.map((items: any) => (
                        <div className=" text-black m-5 w-[180px] h-[244px] bg-gray-100 rounded-md" key={items._id}>
                            <input type="checkbox" id={items._id} hidden className='putDetails' />
                            <label htmlFor={items._id}>
                                <img className='cursor-pointer hover:scale-110 duration-200 border-red-500 h-[187px] w-[160px] m-[10px] rounded-md' src={items.image} alt="" />
                            </label>
                            <div className="FormDetail relative duration-200 bg-Detail scrollBar">
                                <label htmlFor={items._id} className='canCel right-[10px] top-[5px] text-white cursor-pointer hover:scale-110'><MdOutlineCancel /></label>
                                <div className="">
                                    <img className='w-[310px] rounded-md border-8 mt-7 border-orange-100 h-[320px] mx-auto' src={items.image} alt="" />
                                    <p className='text-center font-serif font-bold text-xl text-green-600'>{items.name}</p>
                                    <div className="flex justify-center space-x-1 mt-2">
                                        <div className="border-2 w-44 border-gray-200 ">
                                            <p className='text-2xl'><span className='text-sm textDetails'>Price: </span><span className='text-red-500'>$</span>{items.price}.00</p>
                                        </div>
                                        <div className="border-2 w-44 border-gray-200 ">
                                            <p className='text-2xl'><span className='text-sm textDetails'>SL: </span><span className='text-yellow-600'>{items.quantity}</span><span className='text-sky-500'>(qty)</span></p>
                                        </div>
                                    </div>
                                    <div className="mb-5 mt-4">
                                        <p className='text-gray-600 ml-5'>the detail information of product</p>
                                        <div className="w-[350px] mx-auto shadow-inner shadow-gray-200 h-[200px] overflow-y-scroll">
                                            <p className='p-1 text-xs'>{items.description}</p>
                                        </div>
                                    </div>
                                    <p className='text-xs ml-2 text-gray-400'><span className='text-green-600'>created:</span> {items.createdAt}</p>
                                    <p className='text-xs ml-2 text-gray-400'><span className='text-green-600'>recent update:</span> {items.createdAt}</p>
                                </div>
                            </div>
                            <label htmlFor={items._id} className='displayDetails putDetails'></label>
                            <p className='text-center font-medium text-gray-600 -mt-1 font-sans'>{items.name}</p>
                            <div className="flex justify-around textSmall ">
                                <p className='text-orange-600'>${items.price}.00</p>
                                <p>{items.quantity}(qty)</p>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default Home
