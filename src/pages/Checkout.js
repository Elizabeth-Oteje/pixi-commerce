import React, { useState } from 'react'
import UserNavbar from '../components/Navbar/UserNavbar'
import UserFooter from '../components/Footer/UserFooter'
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../AppContext'
import payment from '../assets/payment.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsSplitUpAndLeft, faLocationArrow, faRoute } from '@fortawesome/free-solid-svg-icons'
import { useWindowWidth } from './Cart'
import { shuffleArray } from './Cart'
import { OptionsYouMightLike } from './Cart'
import { clear } from '@testing-library/user-event/dist/clear'
function checkInput() {
    var input = document.querySelector("input");
    var span = input.nextElementSibling;
    if (input.value === "") {
        span.style.display = "inline";
    } else {
        span.style.display = "none";
    }
}



const Checkout = () => {
    const { cartItems, setCartItems,calculateTotal, clearCart } = useCart();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [town, setTown] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [address, setAddress] = useState('')
    const [additionalAddress, setAdditionalAddress] = useState('')
    const [state, setState] = useState('')
    const [apartment, setApartment] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isFormValid, setIsFormValid] = useState(false);
    const [isForm2Valid, setIsForm2Valid] = useState(false);
   
    const [selectedButton, setSelectedButton] = useState(0);
    const navigate = useNavigate()
    const VAT = 20; // Example VAT rate of 20%

    const subtotal = calculateTotal();
   
    const totalIncludingVAT = subtotal + VAT; 

    const handleButtonClick = (buttonIndex) => {
        setSelectedButton(buttonIndex);
      };

      const validateForm = () => {
        setIsFormValid(firstName !== '' && lastName !== ''&& phoneNumber !== ''  && email !== '' && password !== '' && confirmPassword !== ''  );
      };
      
      const validateForm2 = () => {
        setIsForm2Valid(streetAddress !== '' && town !== ''&& state !== ''  && additionalAddress !== ''  );
      };

      const handleEmailChange= (e)=> {
        setEmail(e.target.value);
        validateForm()
       }


       const handleFirstNameChange= (e)=> {
        setFirstName(e.target.value);
        validateForm()
       }

       const handleLastNameChange= (e)=> {
        setLastName(e.target.value);
        validateForm()
       }

       const handlePhoneNumberChange = (e) => {
        const value = e.target.value;
        // Allow only numeric input
        const re = /^[0-9\b]+$/;
      
        // If the field is empty (allowing deletion) or matches the numeric pattern and does not exceed 11 characters
        if (value === '' || (re.test(value) && value.length <= 11)) {
          setPhoneNumber(value);
        }
        validateForm()
      };
      

       const handlePasswordChange= (e)=> {
        setPassword(e.target.value);
        validateForm()
       }

       const handleConfirmPasswordChange= (e)=> {
        setConfirmPassword(e.target.value);
        validateForm()
       }

       const handleStreetAddressChange= (e)=> {
        setStreetAddress(e.target.value);
        validateForm2()
       }

       const handleAdditionalAddressChange= (e)=> {
        setAdditionalAddress(e.target.value);
        validateForm2()
       }
       const handleTownChange= (e)=> {
        setTown(e.target.value);
        validateForm2()
       }

       const handleApartmentChange= (e)=> {
        setApartment(e.target.value);
        validateForm2()
       }
       const handleStateChange= (e)=> {
        setState(e.target.value);
        validateForm2()
       }

       const handlePay = () => {
      
        handleButtonClick(3); 
      };

      const handleContinue = ()=> {
        clearCart();
        navigate('/')
      }
      

  return (
    <div className=''>
     <UserNavbar/>
     <div className=''>
     <section className='px-3 px-lg-5' style={{backgroundColor:'#FCFCFC'}}>
        <div className='px-lg-5 ' >
            <div className='mx-xl-5 mt-3 bg-white mt-lg-5'>
            <Row className='px-2 px-md-2 px-lg-4 py-3'>
                <Col xs={6} md={3} className='justify-content-start'>
                <div className={selectedButton === 0 ? 'active-itinerary' : 'itinerary-text'} onClick={() => handleButtonClick(0)}>
              <div className='d-flex gap-2'>
              <i className="bi bi-person"></i>
                <p className='my-auto'>Personal Information</p>
                
              </div>
              </div></Col>
              <Col xs={6} md={3} className='d-flex justify-content-start just-content-sm-end'>
              <div className={selectedButton === 1? 'active-itinerary ' : 'itinerary-text '} >
              <div className='d-flex gap-2'>
              <i className="bi bi-geo-alt"></i>
                <p className='my-auto'>Shipping Address</p>
                
              </div>
              </div>
              </Col>
              <Col  xs={6} md={3} className='d-flex justify-content-start just-content-sm-end'>
              <div className={selectedButton === 2 ? 'active-itinerary' : 'itinerary-text'} >
              <div className='d-flex gap-2'>
              <i className="bi bi-credit-card"></i>
                <p className='my-auto'>Payment</p>
                
              </div>
              </div>
              </Col>
              <Col  xs={6} md={3} className='d-flex justify-content-start just-content-sm-end'>
              <div className={selectedButton === 3 ? 'active-itinerary ' : 'itinerary-text '} >
              <div className='d-flex gap-2'>
              <i className="bi bi-patch-check"></i>
                <p className='my-auto'>Confirmation</p>
                
              </div>
              </div>
              </Col>
              
            
            </Row>
            {selectedButton === 0 && (
                <div>
                <div style={{borderBottom:'1px solid #dfdcdc'}} className='px-3 px-lg-4 py-3'><h5>Add your Personal Information</h5></div>
                <Form onSubmit={() => handleButtonClick(1)}>
                    <div style={{borderBottom:'1px solid #dfdcdc'}}>
                    <div className='px-3 px-lg-4 py-3'>
                    
                    <p style={{color:'#B3BCCD'}}>Personal Information</p>
                    <div className='pt-3 pb-5 mb-5'>
                    <Row >
                        <Col xs={12} md={4} className='mb-4'>
                        <div className=" w-100">
    <Form.Control type="text" id="firstName" placeholder="First Name *" style={{backgroundColor:'#FCFCFC', border:'none'}} value={firstName} required onChange={handleFirstNameChange}/>
    
    </div>
    
                        </Col>
                        <Col xs={12} md={4} className='mb-4'>
                        <div className=" w-100">
    <Form.Control type="text" id="lastName" placeholder="Last Name *" style={{backgroundColor:'#FCFCFC', border:'none'}} value={lastName} required onChange={handleLastNameChange}/>
   
    </div>
                        </Col>
                        
                    </Row>
                    <Row >
                        <Col xs={12} md={4} className='mb-4'>
                        <div className=" w-100">
    <Form.Control type="email" id="email" placeholder="Email Address *" style={{backgroundColor:'#FCFCFC', border:'none'}} value={email} required onChange={handleEmailChange}/>
    
    </div>
    
                        </Col>
                        <Col xs={12} md={4} className='mb-4'>
                        <div className=" w-100">
    <Form.Control type="text" id="phoneNumber" placeholder="Phone Number *" style={{backgroundColor:'#FCFCFC', border:'none'}} value={phoneNumber} required onChange={handlePhoneNumberChange}/>
   
    </div>
                        </Col>
                        
                    </Row>
                    <Row >
                        <Col xs={12} md={4} className='mb-4'>
                        <div className=" w-100">
    <Form.Control type="password" id="password" placeholder="Password *" style={{backgroundColor:'#FCFCFC', border:'none'}} value={password} required onChange={handlePasswordChange}/>
   
    </div>
    
                        </Col>
                        <Col xs={12} md={4} className='mb-4'>
                        <div className=" w-100">
    <Form.Control type="password" id="password" placeholder="Confirm Password *" style={{backgroundColor:'#FCFCFC', border:'none'}} value={confirmPassword} required onChange={handleConfirmPasswordChange}/>
    
    </div>
                        </Col>
                        
                    </Row>
                    </div>
                    </div>
                    </div>
                    <div className='d-flex gap-3 justify-content-end px-4 py-3'>
                        <Button variant='outline-secondary'className='py-2 px-lg-5' onClick={()=> navigate('/cart')}>Cancel</Button>
                        <Button variant='danger' className='py-2 px-lg-5 px-4' type='submit'>Next</Button>
                    </div>
                </Form>
               
                   
                </div>
            )}
             {selectedButton === 1 && (
                <div>
                <div style={{borderBottom:'1px solid #dfdcdc'}} className='px-3 px-lg-4 py-3'><h5>Add new Address</h5></div>
                <Form onSubmit={() => handleButtonClick(2)}>
                    <div style={{borderBottom:'1px solid #dfdcdc'}}>
                    <div className='px-3 px-lg-4 py-3'>
                    
                    <p style={{color:'#B3BCCD'}}>Shipping Information</p>
                    <div className='pt-3 pb-5 mb-5'>
                    <Row >
                        <Col xs={12} md={4} className='mb-4'>
                        <div className=" w-100">
    <Form.Control type="text" id="address" placeholder="Street Address *" style={{backgroundColor:'#FCFCFC', border:'none'}} value={streetAddress} required onChange={handleStreetAddressChange}/>
   
    </div>
    
                        </Col>
                        <Col xs={12} md={4} className='mb-4'>
                        <div className=" w-100">
    <Form.Control type="text" id="apartment" placeholder="Apartment, floor, etc (optionsl)" style={{backgroundColor:'#FCFCFC', border:'none'}} value={apartment}  onChange={handleApartmentChange}/>
   
    </div>
                        </Col>
                        
                    </Row>
                    <Row >
                        <Col xs={12} md={4} className='mb-4'>
                        <div className=" w-100">
    <Form.Control type="text" id="town" placeholder="Town/City *" style={{backgroundColor:'#FCFCFC', border:'none'}} value={town} required onChange={handleTownChange}/>
    
    </div>
    
                        </Col>
                        <Col xs={12} md={4} className='mb-4'>
                        <div className=" w-100" >
                        
    <Form.Control type="text" id="state" placeholder="State *" style={{backgroundColor:'#FCFCFC', border:'none'}} value={state} required onChange={handleStateChange}/>
   
    </div>
                        </Col>
                        
                    </Row>
                    <Row >
                        <Col xs={12} md={8} className='mb-4'>
                        <div className="d-flex gap-2 align-items-center px-2 w-100" style={{backgroundColor:'#FCFCFC', border:'none'}} >
                        <i className="bi bi-geo-alt"></i>
    <Form.Control type="text" id="additionalAddress" placeholder="Additional Address *" style={{backgroundColor:'#FCFCFC', border:'none'}} value={additionalAddress} required onChange={handleAdditionalAddressChange}/>
    
    </div>
    
                        </Col>
                       
                        
                    </Row>
                    <Row>
<Col xs={12} md={4}>
<div className="d-flex gap-2 align-items-center px-2 py-2 w-100" style={{backgroundColor:'#FCFCFC', border:'none', fontSize:'11px'}} >
    <div className='mb-1'>Address Label(optional)</div>
<div className='mt-1 d-flex gap-2'>
    <Form.Check 
  variant='danger' 
  type='radio' 
  label='Home' 
  className='custom-radio'
  name="location"
  id="radioHome"
/>

<Form.Check 
  variant='danger' 
  type='radio' 
  label='Work' 
  className=' custom-radio'
  name="location"
  id="radioWork"
/>
</div>

    
   
                       </div>
</Col>
<Col xs={12} md={4} className='d-flex gap-2 align-items-center justify-content-end'>
<span style={{fontSize:'12px'}}>Set as default</span>
<Form.Check variant='danger'
        type="switch"
        id="custom-switch"
        
      />
</Col>
                    </Row>
                    </div>
                    </div>
                    </div>
                    <div className='d-flex gap-3 justify-content-end px-4 py-3'>
                        <Button variant='outline-secondary'className='py-2 px-lg-4'  onClick={() => handleButtonClick(0)}>Previous</Button>
                        <Button variant='danger' className='px-4 px-lg-5' type='submit'>Next</Button>
                    </div>
                </Form>
               
                   
                </div>
            )}
            {selectedButton === 2 && (
    <div>
        <div style={{borderBottom:'1px solid #dfdcdc'}} className='px-3 px-lg-4 py-3'><h5>Review Order and Payment</h5></div>
        <Form onSubmit={handlePay}>
                    <div  className='mb-5'>
                   
                        <Row>
                            <Col xs={12} md={6}>
                            <div style={{backgroundColor:'#FAFCFE'}} className='py-2 mb-5'>
                                <div className='d-flex justify-content-between align-items-center px-3 pb-2' style={{borderBottom:'1px solid #dfdcdc'}}>
                                    <p className='my-auto'>  <i className="bi bi-geo-alt"></i> &nbsp;Home</p>
                                    <span className='' style={{fontSize:'11px', fontWeight:'600', color:'#DD4B39'}}>Change Address</span>
                                </div>
                                <div className='pt-3 d-flex justify-content-between align-items-center px-3' style={{borderBottom:'1px solid #dfdcdc'}}>
                                    <div>
                                    <div className='d-flex '>
                                        <p style={{color:'#667085', width:'5rem'}}>Name:</p>
                                        <p style={{color:'#394357', fontWeight:'500'}}>{firstName} {lastName}</p>
                                    </div>
                                    <div className='d-flex '>
                                        <p style={{color:'#667085', width:'5rem'}}>Address:</p>
                                        <p style={{color:'#394357', fontWeight:'500'}}>{streetAddress} </p>
                                    </div>
                                    <div className='d-flex '  >
                                        <p style={{color:'#667085', width:'5rem'}}>Email:</p>
                                        <p style={{color:'#394357', fontWeight:'500'}}>{email} </p>
                                    </div>
                                    
                                    </div>
                                    <div className='d-flex gap-1 align-items-center' style={{color:'#4AB247'}}> <i className="bi bi-check-circle"></i><p className='my-auto'>Verified</p></div>
                                </div>
                                <div className='d-flex px-3 pt-1 pb-2'>
                                        <p style={{color:'#667085', width:'5rem'}}>Phone:</p>
                                        <p style={{color:'#394357', fontWeight:'500'}}>{phoneNumber} </p>
                                    </div>
                            </div>
                            <div className='pt-3 mb-5' style={{backgroundColor:'#FAFCFE'}}>
                                <p className='px-3 mb-4' style={{color:'#0D111B'}}>Review your Order</p>
                                    {cartItems.map((item)=> (
                                        <div className=' d-flex justify-content-between px-3 py-4' style={{borderBottom:'1px solid #dfdcdc'}} key={item?.id}>
                                            <div className='d-flex gap-2 gap-md-4 '>
                                                <Image fluid src={item?.productImage} style={{width:'75px', height:'75px'}}/>
                                                <div className=''>
                                                    <div style={{fontSize:'11px', color:'#B3BCCD'}}>ADIDAS</div>
                                                    <p style={{fontWeight:'500'}}>{item?.productName}</p>
                                                    <div className='' style={{fontSize:'10px', color:'#667085'}}> <i className="bi bi-arrow-90deg-left"></i> &nbsp; This item cannot be changed or returned</div>
                                                   
                                                </div>
                                            </div>
                                            <div>
                                                <p style={{color:'#DD4B39'}}>${item.productPrice}</p>
                                                <div style={{fontSize:'12px'}}><span style={{color:'#B3BCCD'}}>QTY: </span><span style={{color:'#394357'}}>{item?.quantity}</span></div>
                                            </div>
                                            </div>
                                    ))}
                                <div>

                                </div>
                            </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className='pt-2 pb-5 px-3 ' style={{ fontWeight:'500', borderBottom:'1px solid #dfdcdc'}} >
                                    <p className='mb-3'style={{color: '#0D111B', fontWeight:'500'}}>Order Summary</p>
                                    <div className='d-flex justify-content-between'>
                                    <p style={{color: '#667085'}}>Subtotal</p>
                                    <p style={{color:'#191919'}}>${calculateTotal().toFixed(2)}</p>
                                    </div>
                                    <div className='d-flex justify-content-between' style={{borderBottom:'1px solid #dfdcdc'}} >
                                    <p style={{color: '#667085'}}>Shipping fee</p>
                                    <p style={{color:'#4AB247'}}>Free</p>
                                    </div>
                                    <div className='d-flex justify-content-between' >
                                    <p style={{color: '#667085'}}><span style={{color:'#B3BCCD'}}>VAT Amount</span></p>
                                    <p style={{color:'##4AB247'}}>$20</p>
                                    </div>
                                    <div className='d-flex justify-content-between mb-5' >
                                    <p style={{color: '#667085'}}>Estimated VAT</p>
                                    <p style={{color:'#4AB247'}}>${totalIncludingVAT.toFixed(2)}</p>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    
                   
                   
                    </div>
                    <div className='d-flex gap-3 justify-content-end px-4 py-3'>
                        <Button variant='outline-secondary'className='py-2 px-lg-4'  onClick={() => handleButtonClick(1)}>Previous</Button>
                        <Button variant='danger' className='py-2 px-4 px-lg-5' type='submit'>Pay</Button>
                    </div>
                </Form>
        
       
    </div>
)}

{selectedButton === 3 && (
    <div>
    <div className='p-5'>
        <div className='d-flex flex-column justify-content-center text-center align-items-center '>
        <Image fluid src={payment} alt='payment'/>
        <h5 className='mt-1 mb-3'>Your order has been successfully registered.</h5>
        <p style={{color:'#667085', maxWidth:'25rem'}} >You’ll receive an email at <span style={{color:'#DD4B39'}}>sarahoshuu@gmail.com </span>once your order is confirmed</p>
        <div className='mt-5'>
            <Button variant='danger' className='py-3 px-4' onClick={handleContinue}>Continue Shopping</Button>
            </div>
            </div >
            <div className='mx-lg-5 px-lg-5 my-5'>
            <div style={{maxWidth:'35rem'}} className='mx-md-5'>
            <div style={{backgroundColor:'#F9F9F9', fontWeight:'500'}} className='p-3'>

        <p className='mb-3' >Order Details</p>
        <div className='d-flex justify-content-between'>
            <p style={{color:'#667085'}}>Order Number:</p>
            <p>#ORD - 202000000</p>
            </div>
            <div className='d-flex justify-content-between'>
            <p style={{color:'#667085'}}>Amount Paid:</p>
            <p>${totalIncludingVAT}</p>
            </div>

    </div>
    <div className='d-block d-md-flex justify-content-between mt-3 mt-lg-5' style={{color:'#394357'}}>
        <p><i className="bi bi-share"></i> &nbsp; Share with friends</p>
        <p><FontAwesomeIcon icon={faRoute}/> &nbsp; Track Order</p>
        <p><i className="bi bi-camera"></i> &nbsp; Take a screenshot</p>
    </div>
    </div>
    </div>
    </div>
    
    </div>

)}
            </div>
           
           {selectedButton === 0  && (
            <div className='pb-4' style={{backgroundColor:'#FCFCFC'}}>
            <div className='mx-xl-5 px-2 my-5 d-flex gap-2 align-items-center' style={{backgroundColor:'#85858514'}}>
                <i className='bi bi-exclamation-circle text-danger'></i>
                    <div style={{fontSize:'10px', color:'#394357'}}>Our checkout is safe and secure. Your personal and payment information is securely transmitted via 128-bit encryption. We do not store any payment card information on our systems</div>
            </div>
            </div>
           ) }
            {selectedButton === 1 && (
            <div className='pb-4' style={{backgroundColor:'#FCFCFC'}}>
            <div className='mx-xl-5 px-2 my-5 d-flex gap-2 align-items-center' style={{backgroundColor:'#85858514'}}>
                <i className='bi bi-exclamation-circle text-danger'></i>
                    <div style={{fontSize:'10px', color:'#394357'}}>Our checkout is safe and secure. Your personal and payment information is securely transmitted via 128-bit encryption. We do not store any payment card information on our systems</div>
            </div>
            </div>
           ) }

          
            {selectedButton === 3 && (
                <section className=' pt-3 pt-md-5 pb-5 px-3 px-xl-5' >
                     <OptionsYouMightLike/>
                </section>
               
            )}
           
            </div>
      
           
     
     </section>
     {selectedButton === 2 && (
            <div className='px-md-5 pb-3 pb-md-5' style={{backgroundColor:'#F2F5F8', top:"",}}>
                <div className='px-1 px-md-5 ' style={{backgroundColor:'#F2F5F8', top:"",}}>
                <div className='px-2 px-md-5 pb-5' style={{backgroundColor:'#F2F5F8', top:"",}}>
                <div className='px-5 py-3' style={{backgroundColor:'white'}}></div>
                <div className='px-5 py-4' style={{backgroundColor:'white'}}></div>
                </div>
                
                </div>
                 
            </div>
           )}
           </div>
     <UserFooter/>
    </div>
  )
}

export default Checkout
