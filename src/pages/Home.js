import React from 'react'
import GuestNavbar from '../components/Navbar/GuestNavbar'
import Footer from '../components/Footer'
import { Container, Card, Row, Image, Col} from 'react-bootstrap'
import phone from '../assets/phone.svg'
import apple from '../assets/apple-logo.svg'

const Home = () => {
  return (
    <div>
        <GuestNavbar/>
        <div className='py-5'>
      <Container>
        <Card className='d-flex px-5 py-1' style={{backgroundColor:'black', borderRadius:'0px'}}><Row>
            <Col xs={6} className='text-white d-flex flex-column gap-3 py-5'>
            <div className='d-flex gap-3 align-items-center'>
              <img src={apple} alt='apple'/>  
              <p className='my-3'>iPhone 14 Series</p>
            </div>
            <h1 className='' style={{lineHeight:'60px', letterSpacing:'4%'}}>Up to 10% off Voucher</h1>
            <div className='d-flex gap-2'>
           <h5 className='pb-1' style={{borderBottom:'1px solid white'}}>Shop Now </h5>
           <i className="bi bi-arrow-right"></i>
           </div>
            </Col>
            <Col xs={6} className='justify-content-center'>
            <Image src={phone} fluid alt='phone'/></Col>
        </Row>
            

        </Card>
      </Container>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
