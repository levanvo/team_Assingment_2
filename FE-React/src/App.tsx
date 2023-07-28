import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { instance } from './api/instance'
import { useAppDispatch, useAppSelector } from './store/useHookProducts'
import { getProduct } from './slices/sliceProducts'

function App() {
  const dispatch = useAppDispatch();
  const { products, isLoading, error }: any = useAppSelector((state: any) => state.products);
  console.log(products);

  useEffect(() => {
    dispatch(getProduct);
    async function a() {
      const { data } = await instance.get("/products");
      console.log(data.data);
    }
    a();
  }, []);
  return (
    <div className="">

    </div>
  )
}

export default App
