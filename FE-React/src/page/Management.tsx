import React, { useState } from 'react'
import { addProduct, removeProduct, updateProduct } from '@/slice/sliceProducts';
import { useAppSelector, useAppDispatch } from "../store/useHookProducts";
import { Link } from 'react-router-dom';
import { FcSettings } from "react-icons/fc"
import { PiTrashThin } from "react-icons/pi"
import { FcHome } from "react-icons/fc"
import { Products } from '@/typeTSX/type';

const Management = () => {
    const [formData, setFormData] = useState({
        name: '',
        image: 'https://picsum.photos/300',
        price: 0,
        quantity: 0,
        description: '',
    });
    const { products, isLoading, error } = useAppSelector((state: any) => state.products);
    const dispatch = useAppDispatch();

    const HandleChange = (event: any) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
    const AddPr = () => {
        // e.preventDefault();
        if (Object.keys(formData).some(key1 => formData[key1] == "")) {
            alert("Form empty ??");
        } else {
            dispatch(addProduct(formData));
        }
    };
    const updatePr = async (data: Products) => {

    }
    const removePr = async (_id: number | string) => {
        dispatch(removeProduct(_id));
    }
    return (
        <div className='text-black non-selectable'>
            <Link to={`/`}><button className='scaleHome ml-[3%] mt-[2%]'><FcHome /></button></Link>
            {/* <button onClick={() => AddPr()} className=' active:scale-90'>Add (tạm thời test)</button> */}
            <p className='text-4xl text-center font-medium mb-3  '>Control-Shop</p>
            <div className="flex justify-end">
                <input type="checkbox" hidden id='okdi' />
                <label htmlFor="okdi" className=' cursor-pointer active:scale-90 text-green-600 font-medium mr-[10%] underline mb-2 hover:text-green-500'>Add new</label>
                <div className="FormAddPr duration-200">
                    <p className='text-center text-white text-lg'><span className='bg-gray-700 text-xl rounded-b-xl pr-4 pl-4 pb-1'>Add product new</span></p>
                    <form onSubmit={() => AddPr()} className='mt-5'>
                        <p className='ml-3'>Name:</p>
                        <input type="text" name='name' onChange={() => HandleChange(event)} className='outline-0 shadow-inner shadow-gray-400 p-1 ml-5 w-[360px]' />
                        <p className='ml-3'>Image:</p>
                        <input type="file" name='image' className='p-1 inPutImage ml-5 w-[360px]' />
                        <p className='ml-3'>Price:</p>
                        <input type="number" name='price' onChange={() => HandleChange(event)} className='outline-0 shadow-inner shadow-gray-400 p-1 ml-5 w-[360px]' />
                        <p className='ml-3'>Quantity:</p>
                        <input type="number" name='quantity' onChange={() => HandleChange(event)} className='outline-0 shadow-inner shadow-gray-400 p-1 ml-5 w-[360px]' />
                        <p className='ml-3'>Description:</p>
                        <textarea name='description' onChange={() => HandleChange(event)} className='outline-0 shadow-inner shadow-gray-400 p-1 ml-5 w-[360px] h-28'></textarea>

                        <div className="flex justify-center mt-3">
                            <button className='hover:bg-gray-600 p-[2px] pl-10 pr-10 bg-gray-700 text-white font-bold'>Add</button>
                        </div>
                    </form>
                </div>
                <label htmlFor='okdi' className="display"></label>
            </div>
            <div className="">
                <table className='w-[90vw] text-center mx-auto mb-10'>
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
                                <td>${items.price}.00</td>
                                <td>{items.quantity}</td>
                                <td>{items.description}</td>
                                <td className='justify-center flex mt-[17%] space-x-2'>
                                    <label htmlFor="" onClick={() => updatePr(items)} className='p-2 non-selectable cursor-pointer text-white rounded-full bg-green-400 hover:scale-110 active:scale-100'><FcSettings /></label>
                                    <button onClick={() => removePr(items._id)} className='p-2 text-white rounded-full bg-red-400 hover:scale-110 active:scale-100'><PiTrashThin /></button>
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
