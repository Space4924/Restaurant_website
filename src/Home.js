import React from 'react';
import data from './data.json';
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className="home__image" src="/pics/login1.jpg" alt=""/>
            </div>
           
          <div className="home__row">
         {data.map(elem=>
             <div className="home_item" > 
             <Product
             title={elem.title}
             image={elem.image}
             price={elem.price}
            
             /> 
             </div> 
         )}
         
          </div>
        </div>  
    )
}

export default Home

