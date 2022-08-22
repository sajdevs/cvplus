import React from 'react'
import { Navbar ,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

export default function Navbars() {
  return (
     <div className='w-100 main-nav'>
      <Navbar bg='dark' expand='lg' variant='dark' collapseOnSelect>
        <Navbar.Brand><p className='brand-title'>Cv Plus</p></Navbar.Brand>
        <Navbar.Toggle aria-controls='main-navs' />
        <Navbar.Collapse id='main-navs'>
         <Nav className='me-auto'>
          <Nav.Link><Link to='/' className='links'>Home</Link></Nav.Link>
          <Nav.Link><Link to='About' className='links'>About us</Link></Nav.Link>
         </Nav>
        </Navbar.Collapse>
      </Navbar>
     </div>
  )
}
