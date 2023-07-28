import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAppDispatch, useAppSelector } from "./store/useHookProducts";
import { addProduct, getProduct, removeProduct, updateProduct } from "./slice/sliceProducts";

function App() {
  const dispatch = useAppDispatch();
  const { products, isLoading, error } = useAppSelector((state: any) => state.products);
  console.log(products);
  
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <div className="">
      
    </div>
  );
}

export default App
