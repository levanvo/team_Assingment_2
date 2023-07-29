import { useEffect, useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useAppDispatch, useAppSelector } from "./store/useHookProducts";
import { addProduct, getProduct, removeProduct, updateProduct } from "./slice/sliceProducts";
import Home from "./page/Home";
function App() {
  const dispatch = useAppDispatch();
  const { products, isLoading, error } = useAppSelector((state: any) => state.products);
  console.log(`App.tsx --> `,products);
  
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
