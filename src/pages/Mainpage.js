import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbars from './Navbar'
import Home from './Home'
import About from './About'
import Services from './Services'
import Template from './Template'
import Blog from './Blog'
import Footer from './Footer'
import Cv from '../component/Cvs/Cv'
import CoverLetter from '../component/CoverLetter/CoverLetter'
import Resume from '../component/resume/resume'

export default function Main_page() {
  return (
    <div>
     <BrowserRouter>
      <Navbars/>
       <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/Template' element={<Template/>} />
         <Route path='/Services' element={<Services/>} />
         <Route path='/About' element={<About/>} />
         <Route to='/Blog' element={<Blog/>} />
         <Route path='/component/Cvs/Cv' element={<Cv/>} />
         <Route path='/component/resume/resume' element={<Resume/>} />
         <Route path='/component/CoverLetter/CoverLetter' element={<CoverLetter/>} />
       </Routes>
       <Footer/>
     </BrowserRouter>
    </div>
  )
}
