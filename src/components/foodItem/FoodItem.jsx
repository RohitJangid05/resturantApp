import React, { useContext, useState } from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons';



const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItem, addToCart, removeFromCart } = useContext(StoreContext)
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-img' src={image} alt="" />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <div className='food-item-price'>
          <p>₹{price}</p>
          {!cartItem[id] ?
            <div className="add" onClick={() => addToCart(id)} src={assets.add_icon_white}>
              <p>Add</p><FontAwesomeIcon className='fontawsome-icon ' icon={faCirclePlus} size="2x" />
            </div>
            : <div className="food-item-counter">
              <FontAwesomeIcon className='fontawsome-icon cart-remove' onClick={() => removeFromCart(id)} icon={faCircleMinus} />
              <p>{cartItem[id]}</p>
              <FontAwesomeIcon className='fontawsome-icon cart-add' onClick={() => addToCart(id)} icon={faCirclePlus} size="2x" />
            </div>
          }
          
        </div>
      </div>
    </div>
  )
}

export default FoodItem
