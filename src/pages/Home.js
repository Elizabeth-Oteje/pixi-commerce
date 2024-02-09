import React, { useState } from 'react'
import GuestNavbar from '../components/Navbar/GuestNavbar'
import Footer from '../components/Footer'
import { Container, Card, Row, Image, Col, Carousel, Button} from 'react-bootstrap'
import phone from '../assets/phone.svg'
import apple from '../assets/apple-logo.svg'
import musicbox from '../assets/musicbox.svg'
import time1 from '../assets/time-1.png'
import time2 from '../assets/time-2.png'
import time3 from '../assets/time-3.png'
import time4 from '../assets/time-4.png'

import { faGamepad, faHeadphones, faHeadphonesAlt, faHeadphonesSimple, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const CarouselCards = ()=> {
    return (
        <div className=' row px-4'>
        <div className='col-12  col-sm-5 col-xl-4 text-white d-flex flex-column gap-2 gap-md-3 py-md-5 mb-3'>
        <div className='d-flex gap-3 align-items-center'>
        <Image src={apple} alt='phone' fluid />
          <p className='my-3'>iPhone 14 Series</p>
        </div>
        <div  className=''> <h1 >Up to 10% off Voucher</h1></div>
       
        <div className='d-flex gap-2'>
       <h5 className='pb-1' style={{borderBottom:'1px solid white'}}>Shop Now </h5>
       <i className="bi bi-arrow-right"></i>
       </div>
        </div>
        <div className='col-12 col-sm-7 col-xl-8'>
        <Image src={phone} alt='phone' fluid /></div>
    </div>
    )
}
const Home = () => {
    const [selectedButton, setSelectedButton] = useState(0);

    const handleButtonClick = (buttonIndex) => {
      setSelectedButton(buttonIndex);
    };
  return (
    <div>
        <GuestNavbar/>
        <div className='py-4 py-md-5 px-3 px-md-4 px-lg-5 mx-xl-5'>
      
        <Card className='d-flex px-2 px-lg-5 py-md-2 py-4 mb-5 ' style={{backgroundColor:'black', borderRadius:'0px'}}>
        <Carousel  className='custom-carousel '>
      <Carousel.Item interval={1500}>
       <CarouselCards/>
   
      </Carousel.Item>
      <Carousel.Item interval={1500}>
       <CarouselCards/>
   
      </Carousel.Item>
      <Carousel.Item interval={1500}>
       <CarouselCards/>
   
      </Carousel.Item>
      <Carousel.Item interval={1500}>
       <CarouselCards/>
   
      </Carousel.Item>
      <Carousel.Item interval={1500}>
       <CarouselCards/>
   
      </Carousel.Item>
    </Carousel>
            
            

        </Card>
        <section className='my-3 my-md-5'>
            <div className='d-flex align-items-center gap-3 mt-lg-5 pt-5 mb-3'>
                <div className='px-2 py-3' style={{backgroundColor:"#DB4444", borderRadius:"5px"}}></div>
                <h6 style={{color:"#DB4444"}} className='my-auto'>Categories</h6>
            </div>
            <h2>Browse By Category</h2>
            <Row className='gap-3 py-5'>
            <button className={selectedButton === 0 ? 'active-jobs-button col py-2' : 'jobs-button col py-2'} onClick={() => handleButtonClick(0)}>
            <i className="bi bi-phone" style={{fontSize:'3rem'}}></i>
            <h6>Phones</h6>
            </button>
            <button className={selectedButton ===1 ? 'active-jobs-button col py-2' : 'jobs-button col py-2'} onClick={() => handleButtonClick(1)}>
            <i className="bi bi-pc-display-horizontal"  style={{fontSize:'3rem'}}></i>
            <h6>Computers</h6>
            </button>
            <button className={selectedButton === 2 ? 'active-jobs-button col py-2' : 'jobs-button col py-2'} onClick={() => handleButtonClick(2)}>
            <i className="bi bi-smartwatch" style={{fontSize:'3rem'}}></i>
            <h6>SmartWatch</h6>
            </button>
            <button className={selectedButton === 3 ? 'active-jobs-button col py-2' : 'jobs-button col py-2'} onClick={() => handleButtonClick(3)}>
            <i className="bi bi-camera" style={{fontSize:'3rem'}}></i>
            <h6>Camera</h6>
            </button>
            <button className={selectedButton === 4 ? 'active-jobs-button col py-2' : 'jobs-button col py-2'} onClick={() => handleButtonClick(4)}>
            <i className="bi bi-headphones" style={{fontSize:'3rem'}}></i>
            <h6>Headphones</h6>
            </button>
            <button className={selectedButton === 5 ? 'active-jobs-button col py-2' : 'jobs-button col py-2'} onClick={() => handleButtonClick(5)}>
            <i className="bi bi-controller" style={{fontSize:'3rem'}}></i>
            <h6>Gaming</h6>
            </button>
           
            </Row>
            {/* <div>
                {selectedButton === 0 || 1 || 2 || 3 || 4 || 5 &&(
                    <div></div>
                ) }
            </div> */}
        </section>
        <div style={{borderBottom:'1px solid #dfdcdc'}}>

        </div>
        <Card className='d-flex px-2 px-lg-5 py-md-2 py-4 my-5 ' style={{backgroundColor:'black', borderRadius:'0px'}}>
       
        <Row className=' px-4'>
        <Col xs={12} sm={5} xl={6} className='text-white d-flex flex-column gap-2 gap-xl-4 py-md-5 mb-3'>
      
        <h6 style={{color:'#00FF66'}}>Categories</h6>
        <h1 className='pe-xl-5 me-xl-5'>Enhance Your Music Experience</h1>
        <div className='d-flex gap-3'>
            <img src={time1} alt='time1' className='timer'/>
            <img src={time2} alt='time2' className='timer'/>
            <img src={time3} alt='time3' className='timer'/>
            <img src={time4} alt='time4' className='timer'/>
        </div>
        <div className='mt-2'>
        <Button className='border-0 px-3 px-md-5 py-2 py-md-3' style={{backgroundColor:'#00FF66', color:'white'}}>Buy Now!</Button>
        </div>
       
        
        </Col>
        <Col xs={12} sm={7} xl={6} className=' align-items-center justify-content-center py-md-5 image-glow'>
        <Image src={musicbox} alt='phone' fluid  className='' /></Col>
    </Row>
  

        </Card>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Home
