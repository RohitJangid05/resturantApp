import React, { useContext } from 'react'
import "./Cart.css"
import {StoreContext} from "../../context/StoreContext"
import {useNavigate} from "react-router-dom"

const Cart = () => {
  const{cartItem,food_list,removeFromCart, getTotalCartAmount}=useContext(StoreContext)
  const navigate=useNavigate()
  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItem[item._id]>0){
            return(
              <div key={index}>
              <div className='cart-item-title cart-items-item'>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>₹{item.price*cartItem[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
              </div>
              <hr />
              </div>
            )
          }
        })}
      </div>
      <div className='cart-bottom'>
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount()===0?0:30}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total</b>
              <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+30}</b>
            </div>
          </div>
            <button onClick={()=>navigate('/order')}>Proceed To Checkout</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Promocode' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
