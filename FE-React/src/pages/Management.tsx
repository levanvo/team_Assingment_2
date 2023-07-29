import React from 'react'
import { addProduct } from '@/slice/sliceProducts';
import { useAppSelector, useAppDispatch } from "../store/useHookProducts";
import { Link } from 'react-router-dom';
import { FcSettings } from "react-icons/fc"
import { PiTrashThin } from "react-icons/pi"

const Management = () => {
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
        <div className='text-black'>
            <div className="flex justify-center ">
                <button onClick={() => AddProducts()} className='bg-sky-500 p-2 active:scale-90'>Add (tạm thời test)</button>
                <Link to={`/`}>
                    <button className='bg-sky-500 p-2 active:scale-90'>Home-page</button>
                </Link>
            </div>
            <div className="">
                <table className='w-[90vw] text-center mx-auto'>
                    <thead>
                        <tr className=' font-bold bg-gray-500 text-white  '>
                            <th>#</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Description</th>
                            <th>Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((items: any, susi: any) => (
                            <tr key={items._id} className='hover:bg-gray-200'>
                                <td className='text-gray-600 font-medium'>{susi + 1}</td>
                                <td>{items.name}</td>
                                <td><img className='w-28 mx-auto h-24 rounded-md' src={items.image} alt="" /></td>
                                <td>{items.price}</td>
                                <td>{items.quantity}</td>
                                <td>{items.description}</td>
                                <td>
                                    <button className='p-2 text-white rounded-full bg-green-400'><FcSettings /></button>
                                    <button className='p-2 text-white rounded-full bg-red-400'><PiTrashThin /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Management
