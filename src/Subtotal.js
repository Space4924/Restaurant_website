import React from 'react';
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from "./Stateprovider"
import {getBasketTotal} from "./Reducer"
import {Link} from 'react-router-dom'

function Subtotal() {
    const[{basket},dispatch]= useStateValue();
    
  return( 
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value)=>(
                <>
                    <p>
                        Subtotal({basket.length}items): <strong>{value}</strong>
                    </p>
                    
                </>    
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />
       <Link to='/Order'> <button>Proceed to Checkout</button></Link>
    </div>
 )
}

export default Subtotal;
