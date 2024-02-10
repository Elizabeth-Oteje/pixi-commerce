import React from 'react'
import { NavDropdown, Navbar } from 'react-bootstrap'

const SalesNavbar = () => {
  return (
    <div>
       <Navbar bg='dark' style={{color:'#fff', height:'48px'}} className='px-3 px-lg-5 mb-3 d-flex justify-content-between align-items-center' >
        <div className='d-none d-lg-flex'></div>
        
            <p style={{marginTop:'10px'}}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! &nbsp; <a href='#' style={{fontWeight:'600', color:'#fff'}}>Shop Now</a></p>

            
            <NavDropdown title="English" id="basic-nav-dropdown" className='me-md-5 me-2 pe-lg-5' style={{fontSize:'14px'}}>
              <NavDropdown.Item href="#action/3.1">French</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Spanish
              </NavDropdown.Item>
             
            </NavDropdown>

            
       
      
        
     </Navbar>
    </div>
  )
}

export default SalesNavbar
