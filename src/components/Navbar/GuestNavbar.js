import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { NavDropdown, Navbar, Button ,Nav, Form, Container} from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

const GuestNavbar = () => {
  return (
    <div>
     <Navbar bg='dark' style={{color:'#fff', height:'48px'}} className='px-3 px-md-5 mb-3 d-flex justify-content-between align-items-center' >
        <div className='d-none d-md-flex'></div>
        
            <p style={{marginTop:'10px'}}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! &nbsp; <a href='#' style={{fontWeight:'600', color:'#fff'}}>Shop Now</a></p>

            
            <NavDropdown title="English" id="basic-nav-dropdown" className='me-md-5 me-2 pe-5' style={{fontSize:'14px'}}>
              <NavDropdown.Item href="#action/3.1">French</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Spanish
              </NavDropdown.Item>
             
            </NavDropdown>

            
       
      
        
     </Navbar>
     <Navbar expand="lg" variant="light" bg="white" className='py-4 px-3 px-md-5 ' style={{borderBottom:'1px solid #dfdcdc'}}>
   <Container>
      <Navbar.Brand className=''>
        <Link to='/'  style={{textDecoration:'none', fontWeight:'800'}}>
        <h3 className='text-dark' >Exclusive</h3>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent" >
        <Nav className="mx-auto gap-4">
        <NavLink activeclassname='active' className='nav-link' to="/">Home</NavLink>
        <Nav.Link className='nav-link' >Contact</Nav.Link>
        <Nav.Link className='nav-link' >About</Nav.Link>
        <Nav.Link className='nav-link' >Signup</Nav.Link>
          
        </Nav>
        <Nav className='gap-4 align-items-center'>
            <div className='px-2 d-flex align-items-center' style={{backgroundColor: '#F5F5F5'}}>
                <Form.Control style={{border:'none', backgroundColor: '#F5F5F5'}} placeholder='What are you looking for'/>
                <i className="bi bi-search"></i>
            </div>
            <i className="bi bi-heart"></i>
            <i className="bi bi-cart3"></i>
         
        </Nav>
      </Navbar.Collapse>
      </Container>
    
  </Navbar>
    </div>
  )
}

export default GuestNavbar
