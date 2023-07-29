import React from 'react'
import { useAppSelector, useAppDispatch } from "../store/useHookProducts";
import { VscSettings } from "react-icons/vsc"
import { addProduct } from '@/slice/sliceProducts';
const Home = () => {
    const { products, isLoading, error } = useAppSelector((state: any) => state.products);
    console.log(products);
    const dispatch = useAppDispatch();

    const AddProducts = () => {
        dispatch(addProduct({
            name: "test--3242",
            image: "https://picsum.photos/300",
            price: 12345,
            quantity: 70,
            description: "ok"
        }));
    };
    return (
        <div>
            <div className="mt-5">
                <button className='w-[10vw] ml-[10%] shadow-lg pt-2 flex justify-center pb-2 shadow-gray-600 rounded-full p-1 active:translate-y-[-3px] active:scale-90 text-gray-200 management text-center font-bold text-2xl'>
                    <span className=''><VscSettings /></span>
                </button>

            </div>
            <div className="w-[90vw] mx-auto mt-10">
                <div className="flex justify-center ">
                    <button onClick={() => AddProducts()} className='bg-sky-500 p-2 active:scale-90'>Add (tạm thời test)</button>
                </div>
                <p className='text-center text-gray-600 font-bold  text-4xl'>Collection to about science books</p>
                <div className="flex justify-center flex-wrap space-x-5">
                    {products?.map((items:any)=>(
                        <div className="text-black m-5 w-[180px] h-[244px] bg-gray-100 rounded-md" key={items._id}> 
                            <img className=' hover:scale-110 duration-200 border-red-500 h-[187px] w-[160px] m-[10px] rounded-md' src={items.image} alt="" />
                            <p className='text-center font-medium text-gray-600 -mt-1'>{items.name}</p>
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
