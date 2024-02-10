import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import pixi from '../../assets/pixi-logo.svg'

const UserNavbar = () => {
  return (
    <div>
       <Navbar expand="lg" variant="light" bg="white" className='py-4 px-2 px-lg-5 justify-content-between align-items-center ' style={{borderBottom:'1px solid #dfdcdc'}}>
 <Container>
 <Navbar.Brand className='ms-0 ms-md-3 ms-xl-5'>
   <img src={pixi} alt='pixi-logo'/>
 </Navbar.Brand>
 <div className='d-flex gap-1 gap-md-3 align-items-center' style={{fontSize:'11px'}}>
    <p className='my-auto'>Secure Checkout</p>
    <div className='d-flex gap-2 px-1 px-md-3 align-items-center' style={{borderLeft:'1px solid #dfdcdc'}}> <i className="bi bi-telephone"></i>
    <p className='my-auto' style={{color:'#667085'}}>For assistance, call</p> <p className='my-auto' style={{color:'#000000'}}>800-1160210</p></div>
 </div>
 </Container>




</Navbar>
<Navbar expand="lg" variant="light" bg="white" className='py-4 px-2 px-lg-5 justify-content-between align-items-center ' style={{borderBottom:'1px solid #dfdcdc'}}>
 <Container>
 <Navbar.Brand className='ms-0 ms-md-3 ms-xl-5'>
 <i class="bi bi-chevron-left"></i>
 <p>Back to cart</p>
 </Navbar.Brand>
 
 </Container>




</Navbar>
    </div>
  )
}

export default UserNavbar
