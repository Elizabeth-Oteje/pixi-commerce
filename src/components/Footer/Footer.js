import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import code from '../../assets/Qr-Code.png'
import googleplay from '../../assets/GooglePlay.png'
import appstore from '../../assets/appstore.png'
import social from '../../assets/social-icons.png'

const Footer = () => {
  return (
    <div style={{backgroundColor:'#000000'}}>
    <div className='py-4 py-md-5 px-4 px-md-4 px-lg-5 text-white ' >
        <Row className='mx-xl-4'>
            <Col className='d-flex flex-column gap-3 mb-4 '>
                <h3>Exclusive</h3>
                <h4>Subscribe</h4>
                <div>
                <p>Get 10% off your first order</p>
                <div className='d-flex align-items-center' style={{border:'1px solid white'}}><Form.Control placeholder='Enter your email' className='border-0' style={{backgroundColor:'#000000'}}/>
                <FontAwesomeIcon icon={faPaperPlane} className='me-3'/></div>
                </div>
            </Col>
            <Col className='d-flex flex-column gap-3 mb-4'>
            <h4>Support</h4>
            <h6>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</h6>
            <h6>exclusive@gmail.com</h6>
            <h6>+88015-88888-9999</h6>
            </Col>
            <Col className='d-flex flex-column gap-3 mb-4 ps-xl-5'>
            <h4>Account</h4>
            <div className='d-flex flex-column gap-2' >
                <h6>My Account</h6>
                <h6>Login / Register</h6>
                <h6>Cart</h6>
                <h6>Wishlist</h6>
                <h6>Shop</h6>
            </div>
            </Col>
            <Col className='d-flex flex-column gap-3 mb-4 '>
            <h4>Quick Link</h4>
            <div className='d-flex flex-column gap-2'>
                <h6>Privacy Policy</h6>
                <h6>Terms of Use</h6>
                <h6>FAQ</h6>
                <h6>Contact</h6>
            </div>
            </Col>
            <Col className='d-flex flex-column gap-2 mb-4 text-center align-items-center align-items-md-start'>
                <h4>Download App</h4>
                <div>
                    <span style={{fontSize:'12px'}}>Save $3 with App New User Only</span>
                    <div className='d-flex mb-3 gap-2 mt-1'>
                        <img src={code}/>
                        <div className='d-flex flex-column'>
                            <img src={googleplay} className='mb-2'/>
                            <img src={appstore}/>
                        </div>
                    </div>
                    <img src={social}/>
                </div>
            </Col>
        </Row>
        </div>
        <div style={{borderBottom:'0.5px solid #dfdcdc', opacity:'20%'}}></div>
        <div className='d-flex p-2 justify-content-center'>
            <p style={{color:'#FFFFFF', opacity:'20%'}}> &copy; Copyright Rimel 2022. All right reserved</p>
        </div>
    </div>
  )
}

export default Footer
