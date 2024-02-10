import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { NavDropdown, Navbar, Button ,Nav, Form, Container} from 'react-bootstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const GuestNavbar = () => {
  const navigate = useNavigate()
  const navigateToCart = ()=> {
navigate('/cart')
  }
  return (
    <div>
    
     <Navbar expand="lg" variant="light" bg="white" className='py-4 px-3 px-lg-5 ' style={{borderBottom:'1px solid #dfdcdc'}}>
 
      <Navbar.Brand className='ms-3 ms-xl-5'>
        <Link to='/'  style={{textDecoration:'none', fontWeight:'800'}}>
        <h3 className='text-dark' >Exclusive</h3>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent" >
        <Nav className="mx-auto gap-4 gap-md-3">
        <NavLink activeclassname='active' className='nav-link' to="/">Home</NavLink>
        <Nav.Link className='nav-link' >Contact</Nav.Link>
        <Nav.Link className='nav-link' >About</Nav.Link>
        <Nav.Link className='nav-link' >Signup</Nav.Link>
          
        </Nav>
        <Nav className='gap-4 me-3 me-xl-5 mt-3 mt-lg-0'>
            <div className='px-2 d-flex align-items-center order-3 order-lg-1 ' style={{backgroundColor: '#F5F5F5'}}>
                <Form.Control style={{border:'none', backgroundColor: '#F5F5F5'}} placeholder='What are you looking for' className=''/>
                <i className="bi bi-search"></i>
            </div>

            <div className='my-auto order-2 order-lg-2'> <i className="bi bi-heart"></i></div>
            <div className='my-auto order-1 order-lg-3'><i className="bi bi-cart3" onClick={navigateToCart}></i></div>
         
        </Nav>
      </Navbar.Collapse>
     
    
  </Navbar>
    </div>
  )
}

export default GuestNavbar
