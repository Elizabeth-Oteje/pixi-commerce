import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const AddToCartModal = ({showModal, handleCloseModal, selectedProduct, handleDecreaseQuantity, handleIncreaseQuantity, quantity, handleAddToCart}) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal} centered>
  <Modal.Header closeButton>
    <Modal.Title>{selectedProduct?.productName}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <img src={selectedProduct?.productImage} style={{width:"150px", height:'150px'}}/>
    <p className='mt-2'>Price: ${selectedProduct?.productPrice}</p>
    {/* Quantity controls */}
    <div className="button-group">
      <Button variant='secondary' onClick={handleDecreaseQuantity}>-</Button>
      
      <Button variant='light' >{quantity}</Button>
      <Button variant='secondary' onClick={handleIncreaseQuantity}>+</Button>
    </div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="danger" onClick={handleCloseModal} className='px-4'>Close</Button>
    <Button variant="success" onClick={handleAddToCart}>Add to Cart</Button>
  </Modal.Footer>
</Modal>

  )
}

export default AddToCartModal
