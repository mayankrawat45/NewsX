import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React  from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import   LoadingBar from "react-top-loading-bar";

 const App=()=> {
  const pageSize=9;
  const apiKey=import.meta.env.VITE_NEWS_API
  const [progress,setProgress]=useState(0)
  
  
    return (
      <div>
          <BrowserRouter> 
            <Navbar/>      
            <LoadingBar
                color="#f11946"
                progress={progress}
                
              />
          <Routes>
            <Route path='/' element={<News setProgress ={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general"/>} />
            <Route path='/general' element={<News setProgress ={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general"/>} />
            <Route path='/business' element={<News setProgress ={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="us" category="business"/>} />
            <Route path='/entertainment' element={<News setProgress ={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="us" category="entertainment"/>} />
            <Route path='/health' element={<News setProgress ={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health"/>} />
            <Route path='/science' element={<News setProgress ={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science"/>} />
            <Route path='/sports' element={<News setProgress ={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports"/>} />
            <Route path='/technology' element={<News setProgress ={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology"/>} />
          </Routes>
          </BrowserRouter>
      </div>
    )
  
}

export default App