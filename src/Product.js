import React from 'react'
import './Product.css'
import{useStateValue} from './Stateprovider'

function Product({title, price, image, rating}) {
    const [{basket}, dispatch] = useStateValue();
    const addToBasket =() =>{ 
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                title: title,
                image: image,
                price: price,
                rating: rating,
                            
            },   
        })
        

    }
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                
            </div>
            <img src={image} alt="image"/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
