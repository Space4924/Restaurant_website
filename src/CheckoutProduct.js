import React from 'react';
import "./CheckoutProduct.css"
import {useStateValue} from "./Stateprovider"

function CheckoutProducts({image,title,price,rating}) {
  const[ {basket}, dispatch] = useStateValue();  
  const removeFromBasket=() =>{
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      title: title, 
    })

    }
  return( <div className="center">
  <div className='checkoutProduct'>
       <img className='checkoutProduct__image' src={image}/>
       <div className='checkoutProduct__info'>
         <p className='checkoutProduct__title'>{title}</p>
         <p className='checkoutProduct__price'>
            <small>$</small>
            <strong>{price}</strong>
         </p>
         
         <button className='checkoutProduct_button' onClick={removeFromBasket}>Remove from Basket</button>
       </div>
  </div>
  </div>
  )
}

export default CheckoutProducts;
