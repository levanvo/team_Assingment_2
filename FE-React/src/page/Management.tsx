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
    const [formData2, setFormData2] = useState({});
    const { products, isLoading, error } = useAppSelector((state: any) => state.products);
    const dispatch = useAppDispatch();

    const HandleChangeAdd = (event: any) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    const AddPr = (e: any) => {
        // e.preventDefault();
        if (Object.keys(formData).some(key1 => formData[key1] == "")) {
            alert("Form empty or missing something ??");
        } else if (formData.name == " " || formData.description == " ") {
            alert("No spaces !")
        } else {
            dispatch(addProduct(formData));
        };
    };
    const HandleChangeUpdate = (event: any) => {
        const { name, value } = event.target;
        setFormData2((prevData) => ({ ...prevData, [name]: value }));
    };
    const UpdatePr1 = async (data: Products) => {
        setFormData2(data)
    };
    const UpdatePr2 = async (e: any) => {
        // e.preventDefault();
        if (Object.keys(formData2).some(key1 => formData2[key1] == "")) {
            alert("Form empty or missing something ??");
        } else if (formData.name == " " || formData.description == " ") {
            alert("No spaces !")
        } else {
            dispatch(updateProduct(formData2));
        };
    };
    const removePr = async (_id: number | string) => {
        dispatch(removeProduct(_id));
    };
    return (
        <div className='text-black non-selectable mx-auto'>
            <Link to={`/`}><button className='scaleHome ml-[3%] mt-[2%]'><FcHome /></button></Link>
            <p className='text-4xl text-center font-medium mb-3  '>Control-Shop</p>
            <div className="flex justify-end">
                <input type="checkbox" hidden id='okdi' />
                <label htmlFor="okdi" className=' cursor-pointer active:scale-90 text-green-600 font-medium mr-[10%] underline mb-2 hover:text-green-500'>Add new</label>
                <div className="FormAddPr duration-200">
                    <p className='text-center text-white text-lg'><span className='bg-gray-700 text-xl rounded-b-xl pr-4 pl-4 pb-1'>Add product new</span></p>
                    <form onSubmit={() => AddPr(event)} className='mt-5'>
                        <p className='ml-3'>Name:</p>
                        <input type="text" name='name' maxLength={20} onChange={() => HandleChangeAdd(event)} className='outline-0 shadow-inner shadow-gray-400 p-1 ml-5 w-[360px]' />
                        <p className='ml-3'>Image: <span className='picsumText text-red-500'>(default choose image of picsum)</span></p>
                        <input type="file" name='image' className='p-1 inPutImage ml-5 w-[360px]' />
                        <p className='ml-3'>Price:</p>
                        <input type="number" name='price' maxLength={5} onChange={() => HandleChangeAdd(event)} className='outline-0 shadow-inner shadow-gray-400 p-1 ml-5 w-[360px]' />
                        <p className='ml-3'>Quantity:</p>
                        <input type="number" name='quantity' maxLength={5} onChange={() => HandleChangeAdd(event)} className='outline-0 shadow-inner shadow-gray-400 p-1 ml-5 w-[360px]' />
                        <p className='ml-3'>Description:</p>
                        <textarea name='description' onChange={() => HandleChangeAdd(event)} className='outline-0 shadow-inner shadow-gray-400 p-1 ml-5 w-[360px] h-28'></textarea>

                        <div className="flex justify-center mt-3">
                            <button className='hover:bg-gray-600 p-[2px] pl-10 pr-10 bg-gray-700 text-white font-bold'>Add</button>
                        </div>
                    </form>
                </div>
                <label htmlFor='okdi' className="display"></label>
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
                            <tr key={items._id} className='tbodyManager'>
                                <td className='text-gray-600 font-medium'>{susi + 1}</td>
                                <td className='w-56'>{items.name}</td>
                                <td><img className='w-28 mx-auto h-24 rounded-md' src={items.image} alt="" /></td>
                                <td>${items.price}.00</td>
                                <td>{items.quantity}</td>
                                <td className='w-72'>{items.description.length > 100 ? items.description.slice(0, 100) + " ..." : items.description}</td>
                                <td className='justify-center flex items-center h-28 space-x-2'>
                                    <input type="checkbox" hidden id={items._id} className='okdi2' />
                                    <label htmlFor={items._id} onClick={() => UpdatePr1(items)} className='p-2 non-selectable cursor-pointer text-white rounded-full bg-green-400 hover:scale-110 active:scale-100'><FcSettings /></label>

                                    <div className="FormUpdatePr duration-200">
                                        <p className='text-center text-white text-lg'><span className='bg-gray-700 text-xl rounded-b-xl pr-4 pl-4 pb-1'>Update product new</span></p>
                                        <form onSubmit={() => UpdatePr2(event)} className='mt-5'>
                                            <p className='ml-3'>Name:</p>
                                            <input type="text" defaultValue={items.name} maxLength={20} name='name' onChange={() => HandleChangeUpdate(event)} className='outline-0 shadow-inner shadow-gray-400 p-1 ml-1 w-[360px]' />
                                            <p className='ml-3'>Image:<span className='picsumText text-red-500'>(default choose image of picsum)</span></p>
                                            <input type="file" name='image' className='p-1 inPutImage ml-1  w-[360px]' />
                                            <p className='ml-3'>Price:</p>
                                            <input type="number" defaultValue={items.price} maxLength={5} name='price' onChange={() => HandleChangeUpdate(event)} className='outline-0 shadow-inner shadow-gray-400 p-1 ml-1 w-[360px]' />
                                            <p className='ml-3'>Quantity:</p>
                                            <input type="number" defaultValue={items.quantity} maxLength={5} name='quantity' onChange={() => HandleChangeUpdate(event)} className='outline-0 shadow-inner shadow-gray-400 p-1 ml-1 w-[360px]' />
                                            <p className='ml-3'>Description:</p>
                                            <textarea name='description' defaultValue={items.description} onChange={() => HandleChangeUpdate(event)} className='outline-0 shadow-inner shadow-gray-400 p-1 ml-1 w-[360px] h-28'></textarea>

                                            <div className="flex justify-center mt-3">
                                                <button className='hover:bg-gray-600 p-[2px] pl-10 pr-10 bg-gray-700 text-white font-bold'>Update</button>
                                            </div>
                                        </form>
                                    </div>
                                    <label htmlFor={items._id} className="display2 okdi2"></label>
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
