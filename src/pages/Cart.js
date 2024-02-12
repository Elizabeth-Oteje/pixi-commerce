import React, {useState, useEffect} from 'react';
import { useCart } from '../AppContext';
import GuestNavbar from '../components/Navbar/GuestNavbar';
import Footer from '../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { Button, Carousel, Row, Col, Card, Image } from 'react-bootstrap';
import { products } from '../products';
import { getRatingStars } from './Home';
import eyeHeart from '../assets/eye-heart.svg'
import AddToCartModal from '../components/AddToCartModal';

 export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // ES6 destructuring swap
    }
    return array;
  }
 export function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowWidth;
  }

  export const OptionsYouMightLike = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
const [quantity, setQuantity] = useState(1);
const { addToCart } = useCart();
const handleShowModal = (product) => {
    setSelectedProduct(product);
    setQuantity(1); 
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
    handleCloseModal(); // Close the modal after adding to cart
   
    navigate('/cart'); // Navigate to the cart page
  };
    const windowWidth = useWindowWidth();
    const isMobile = windowWidth < 768; // Assuming 768px is the breakpoint for mobile screens
  
    // Shuffle products once on component mount
    const [shuffledProducts] = useState(() => shuffleArray([...products]).slice(0, 4));
  
    return (
      <div style={{backgroundColor:'#fcfcfc'}} className=''>
        <h4 className="my-4">We think you might like there</h4>
        {isMobile ? (
          <Carousel className='product-carousel px-4' variant='dark'>
            {shuffledProducts.map((product) => (
              <Carousel.Item key={product.id} className='mb-5'>
                
                            <Card className='border-0 product-card' onClick={() => handleShowModal(product)} style={{backgroundColor:'none'}} >
             
                            <Card className='d-flex align-items-center text-center justify-content-center p-4 position-relative' style={{backgroundColor:'#F5F5F5', border:'none'}}>
                                            <Image fluid src={product.productImage}  className='' style={{height:'180px'}}/>
                                            <div className='position-absolute d-flex flex-column gap-2' style={{top:'5%', right:'5%'}}>
                                           <img src={eyeHeart} style={{width:'25px'}}/>
                                            </div>
                                            {product.productStatus && (<div className='position-absolute d-flex flex-column gap-2' style={{top:'5%', left:'5%'}}>
                                                <span className='px-2 py-1' style={{backgroundColor:'#00FF66', color:'#FAFAFA', fontSize:"11px"}}>NEW</span>
                                           
                                            </div>)}
                                            
                            </Card>
              <div className=' pt-2' style={{backgroundColor:'#fcfcfc'}}>
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
          
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <Row>
            {shuffledProducts.map((product) => (
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
  <div className=' pt-2' style={{backgroundColor:'#fcfcfc'}}>
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
        )}
         <AddToCartModal showModal={showModal} handleCloseModal={handleCloseModal} selectedProduct={selectedProduct} handleDecreaseQuantity={handleDecreaseQuantity} handleIncreaseQuantity={handleIncreaseQuantity} quantity={quantity} handleAddToCart={handleAddToCart}/>
      </div>
    );
  };


const Cart = () => {
    const { cartItems, removeFromCart, clearCart, calculateTotal } = useCart();

    const navigate=useNavigate()
    const handlePurchase = () => {
        navigate('/checkout')
    }

    

  return (

    <div>
        <GuestNavbar/>
        <div className='py-5 px-3 px-md-5 ' >
            <section>
        <h5 className='py-2' style={{color:'#373737', fontWeight:'500'}}>Your Selections</h5>
        <div className='line mb-3' style={{border:'1px solid #7E7E7F'}}></div>

        {cartItems?.length > 0 ? (
        <div>
        <div className='d-block d-lg-flex justify-content-between align-items-center '>
      <div className=' cartItems'>
        {cartItems?.map((item) => {
          

          
            return (
              <div key={item?.id}>
              
                <div className='d-flex gap-4 gap-md-3 align-items-center py-4 px-2 px-xxl-4 '>
                <div className="card " style={{width:'14rem', border:'none' }}>
                      <div className='d-flex align-items-center text-center justify-content-center p-4 position-relative' style={{backgroundColor:'#F5F5F5', border:'none', }}>
                    <img src={item?.productImage} alt={item?.productName }className="" style={{borderRadius:'none', maxWidth:'120px', maxHeight:'120px'}} />
                    </div>
                    <div className="card-body justify-content-center align-items-center" style={{borderRadius: '0px 0px 20px 20px',
        background:'#D1D2D3'}}>
                  
                    <p className="p-small text-white" style={{fontWeight:'500'}}>{item?.productName}</p>
                    
                  </div>
                </div>
                  <div className='d-block d-md-flex gap-4 mt-3 align-items-center mt-md-0'>
                 
                  <div className='d-flex align-items-center gap-2' >
                      <h5 className='my-auto'>QTY:</h5>
                     
                        
                        <button 
                             
                             className='px-2'
                             style={{backgroundColor:'white'}}
                           >
                            {item.quantity}
                           </button>
                    </div>
                
                  <div className=''>
                    <h5 className='my-2 my-md-auto' style={{fontWeight:'600'}}>Price: ${item?.productPrice?.toLocaleString() }</h5>
                  </div>
                  <div>
                  <Button variant='warning' onClick={() => removeFromCart(item.id)}style={{cursor:'pointer'}}className='mt-2 mt-md-0'>Remove</Button>
                  </div>
                  </div>
                
                 
                
                </div>
                <div className='line ' style={{border:'1px solid #7E7E7F'}}></div>

              </div>
            );
          

          return null
        })}
         
      </div>
      <div className='card p-3 mt-xl-0 mt-lg-5 mt-5' style={{borderRadius:'none',width:'18rem', color:'#7E7E7F'}}>
          <div className=''>
        <h4  style={{color:'#7E7E7F'}}>Order Summary</h4>
        <div className='line my-3' style={{border:'1px solid #7E7E7F'}}></div>
        <div className='d-flex flex-column'  style={{color:'#7E7E7F'}}>
          
          <div className='d-flex justify-content-between'> <h5  style={{color:'#7E7E7F'}}>Tax <span className='p-small'>(incl)</span></h5> 
         
          </div>
          <div className='d-flex justify-content-between mb-3'> <h5  style={{color:'#7E7E7F'}}>Total</h5> 
          <h5  style={{color:'#7E7E7F', fontWeight:'600'}}>${calculateTotal().toFixed(2)}</h5>
          </div>
        
      </div>
      <Button onClick={handlePurchase} className='w-100 ' variant="success">Checkout</Button>
        </div>
      </div>
      
      </div>
      <div className='text-center py-5'> <Button onClick={clearCart} variant="danger" className='px-5 py-2'>Clear Cart</Button></div>
      </div>
       ) : (
        <p className='mt-4'>Your cart is empty</p>
       )}

       </section>
       
      
     
        </div>
        <section className='mt-3 mt-md-5 pt-3 py-5 px-3 px-md-5' style={{backgroundColor:'#fcfcfc'}}>
            <OptionsYouMightLike/>
       </section>
        <Footer/>
    </div>
  );
};

export default Cart;

