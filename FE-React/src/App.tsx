import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { instance } from './api/instance'

function App() {
  const restApi=async ()=>{
    const {data}=await instance.get(`/products`);
    console.log(data.data);
    
  }
  restApi();
  return (
    <div className="">

    </div>
  )
}

export default App
