import React from 'react'
import { FaShippingFast } from 'react-icons/fa'

const Delivery = () => (
  <div className='product-card__delivery-type'>
    <FaShippingFast className='product-card__delivery-type_icon' />
    <span className='product-card__delivery-type_text'>Бесплатно по РФ</span>
  </div>
)

export default Delivery
