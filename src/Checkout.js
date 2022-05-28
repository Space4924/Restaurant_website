import "./Checkout.css";
import React from "react";
import Subtotal from "./Subtotal";
import {useStateValue} from "./Stateprovider";
import CheckoutProduct from "./CheckoutProduct";



function Checkout() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
       
        <div className>
          <h1 className="ch__title">Shopping Cart</h1>
          {basket.map(item => (<CheckoutProduct 
              title={item.title}
              image= {item.image}
              rating= {item.rating}
              price= {item.price}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
         <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
