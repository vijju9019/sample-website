import { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes,Route,Link, useNavigate} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Services from './pages/Services'
import About from './pages/About'
import Notfound from './pages/Notfound'



function App() {
  const navi= useNavigate('/')
 
  return (
   <> 

   <div >
    <Navbar />
    <button className='bg-blue-600 px-3 py-2 cursor-pointer  rounded-2xl text-white  gap-80 text-bold ' 
    onClick={()=>{
      navi('/')
    }}> Go to Home </button>

    <button  className='  justify-end items-end cursor-pointer
     bg-blue-500 px-2 py-2 rounded-2xl text-white text-bold'   onClick={()=>{
      navi(-1)
    }}> Back </button>
    <Routes>
      <Route  path ='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/about' element={<About/>} />
      <Route path='*' element={<Notfound/>}/> 
    </Routes>
  


</div>

   </>

  )
}

export default App
