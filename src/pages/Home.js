import React, { useState } from 'react'
import GuestNavbar from '../components/Navbar/GuestNavbar'
import Footer from '../components/Footer/Footer'
import { Container, Card, Row, Image, Col, Carousel, Button, CardImg} from 'react-bootstrap'
import phone from '../assets/phone.svg'
import apple from '../assets/apple-logo.svg'
import musicbox from '../assets/musicbox.svg'
import time1 from '../assets/time-1.png'
import time2 from '../assets/time-2.png'
import time3 from '../assets/time-3.png'
import time4 from '../assets/time-4.png'
import car from '../assets/fast-car.png'
import eyeHeart from '../assets/eye-heart.svg'
import security from '../assets/security.png'
import headphone from '../assets/heaphones-2.png'
import { products } from '../products'
import { faGamepad, faHeadphones, faHeadphonesAlt, faHeadphonesSimple, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faStar as fasStar, faStar, faStarHalfAlt, faStar as farStar } from '@fortawesome/free-solid-svg-icons';
import AddToCartModal from '../components/AddToCartModal'
import { useCart } from '../AppContext'
import { useNavigate } from 'react-router-dom'
import SalesNavbar from '../components/Navbar/SalesNavbar'

export function getRatingStars(rating) {
  const maxRating = 5;
  const fullStarsCount = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStarsCount = maxRating - fullStarsCount - (hasHalfStar ? 1 : 0);
  const stars = [];

  // Add full stars
  for (let i = 0; i < fullStarsCount; i++) {
    stars.push(<FontAwesomeIcon key={`full-${i}`} icon={faStar} style={{ color: '#FFAD33' }} />);
  }

  // Add half star if necessary
  if (hasHalfStar) {
    stars.push(
      <span key="half" style={{ position: 'relative' }}>
        <FontAwesomeIcon icon={fasStar} style={{ color: '#dfdcdc' }} />
        <FontAwesomeIcon icon={faStarHalfAlt} style={{ color: 'FFAD33', position: 'absolute', left: 0 , top:'15%'}} />
      </span>
    );
  }

  // Add empty stars
  for (let i = 0; i < emptyStarsCount; i++) {
    stars.push(<FontAwesomeIcon key={`empty-${i + fullStarsCount + 1}`} icon={farStar} style={{ color: '#dfdcdc' }} />);
  }

  return <>{stars}</>;
}



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
    const [showModal, setShowModal] = useState(false);
const [selectedProduct, setSelectedProduct] = useState(null);
const [quantity, setQuantity] = useState(1);
const { addToCart } = useCart();
const navigate = useNavigate();

const handleShowModal = (product) => {
    setSelectedProduct(product);
    setQuantity(1); // Reset quantity or set to product's minimum quantity
    setShowModal(true);
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
  };
  
  const handleIncreaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };
  
  const handleDecreaseQuantity = () => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity - 1)); // Prevents quantity from going below 1
  };
  const handleAddToCart = () => {
    addToCart(selectedProduct, quantity);
    handleCloseModal(); 
    navigate('/cart'); 
  };

    const handleButtonClick = (buttonIndex) => {
      setSelectedButton(buttonIndex);
    };
  return (
    <div>
        <SalesNavbar/>
        <GuestNavbar/>
        <div className='py-4 py-md-5 px-4 px-md-4 px-lg-5 mx-xl-5'>
      
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
        <section className='my-5'>
            <div className='d-flex align-items-center gap-3 mt-lg-5 pt-lg-5 pt-3 mb-3'>
                <div className='px-2 py-3' style={{backgroundColor:"#DB4444", borderRadius:"5px"}}></div>
                <h6 style={{color:"#DB4444"}} className='my-auto'>Categories</h6>
            </div>
            <h2>Browse By Category</h2>
            <Row className='gap-3 pt-5 px-2'>
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
        <section className='my-5'>
            <div className='d-flex align-items-center gap-3 mt-lg-5 pt-lg-5 pt-3 mb-3'>
                <div className='px-2 py-3' style={{backgroundColor:"#DB4444", borderRadius:"5px"}}></div>
                <h6 style={{color:"#DB4444"}} className='my-auto'>Our Products</h6>
            </div>
            <h2>Explore Our Products</h2>
            <div className='my-5'>
                <Row>
                    {products.map((product) => (
                        <Col xs={6} lg={3} key={product.id} className='mb-5'>
                            <Card className='border-0 product-card' onClick={() => handleShowModal(product)}>
             
                            <Card className='d-flex align-items-center text-center justify-content-center p-4 position-relative' style={{backgroundColor:'#F5F5F5', border:'none'}}>
                                            <Image fluid src={product.productImage}  className='' style={{height:'180px'}}/>
                                            <div className='position-absolute d-flex flex-column gap-2' style={{top:'5%', right:'5%'}}>
                                           <img src={eyeHeart} style={{width:'25px'}}/>
                                            </div>
                                            {product.productStatus && (<div className='position-absolute d-flex flex-column gap-2' style={{top:'5%', left:'5%'}}>
                                                <span className='px-2 py-1' style={{backgroundColor:'#00FF66', color:'#FAFAFA', fontSize:"11px"}}>NEW</span>
                                           
                                            </div>)}
                                            
                            </Card>
              <div className=' pt-2'>
                <Card.Text>{product.productName}</Card.Text>
                {product.oldPrice && (
                    <div>
                    <div className='d-flex gap-2'>
                        <Card.Text style={{color:'#DB4444'}}>${product.productPrice}</Card.Text>
                        <Card.Text style={{color:'#dfdcdc',textDecoration:'line-through'}}>${product.oldPrice}</Card.Text>

                    </div>
                    <div className='d-flex gap-2 align-items-center'>
                    <Card.Text>
                {getRatingStars(product.productRating)}
                </Card.Text>
                <p style={{color:'#dfdcdc', fontWeight:'600'}}>({product.productReviews})</p>

                    </div>

                    </div>
                )}
                {!product.oldPrice && (
                    <div>
                    <div className='d-flex gap-2 align-items-center'>
                        <Card.Text style={{color:'#DB4444'}}>${product.productPrice}</Card.Text>
                       
                    <Card.Text>
                {getRatingStars(product.productRating)}
                </Card.Text>
                <p style={{color:'#dfdcdc', fontWeight:'600'}}>({product.productReviews})</p>

                    </div>

                    </div>
                )}
                <div className='d-flex gap-2'>
                {product.watchIcon && (<img src={product.watchIcon}/>)}
                {product.statusIcon && (<img src={product.statusIcon}/>)}
              </div>
                
              </div>
              
            </Card>
          </Col>
                    ))}
                </Row>
            </div>
            
           
        </section>
        <section className='my-5'>
            <div className='d-block d-sm-flex gap-5 justify-content-center'>
                <div className='align-items-center text-align-center text-center mb-4'>
                    <img src={car} alt='delivery'/>
                   <h4 className='mt-4' style={{fontWeight:'600'}}>FREE AND FAST DELIVERY</h4>
                   <p>Free delivery for all orders over $140</p>
                </div>
                <div className='align-items-center text-align-center text-center mb-4'>
                    <img src={headphone} alt='delivery' className=''/>
                   <h4 className='mt-4' style={{fontWeight:'600'}}>24/7 CUSTOMER SERVICE</h4>
                   <p>Friendly 24/7 customer support</p>
                </div>
                <div className='align-items-center text-align-center text-center mb-4'>
                    <img src={security} alt='delivery'/>
                   <h4 className='mt-4' style={{fontWeight:'600'}}>MONEY BACK GUARANTEE</h4>
                   <p>We reurn money within 30 days</p>
                </div>
            </div>
        </section>
      </div>
      
      <Footer/>
      <AddToCartModal showModal={showModal} handleCloseModal={handleCloseModal} selectedProduct={selectedProduct} handleDecreaseQuantity={handleDecreaseQuantity} handleIncreaseQuantity={handleIncreaseQuantity} quantity={quantity} handleAddToCart={handleAddToCart}/>
    </div>
  )
}

export default Home
