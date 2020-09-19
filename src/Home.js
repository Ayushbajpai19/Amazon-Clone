import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
           <div className="home_container">

            <img 
            className="home_img" 
            src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg' alt='' />


            <div className="home_row">
            <Product 
            id="1"
            title="The Lean Startup"
            price={7.99} 
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3}
            />
              
              
              <Product 
            id="2"
            title="Sony WH-1000XM3 Industry Leading Wireless Noise Cancelling Headphones, Bluetooth Headset with Mic for Phone Calls, 30 Hours Battery Life, Quick Charge, Touch Control & Alexa Voice Control – (Black)"
            price={199.99} 
            image="https://images-na.ssl-images-amazon.com/images/I/61D4Z3yKPAL._SL1500_.jpg"
            rating={5}
            />
               
                 {/* Product */}
            </div>

            <div className="home_row">
            
            
            <Product 
            id="3"
            title="Kindle Paperwhite (10th gen) - with Built-in Light, Waterproof, 8 GB, WiFi"
            price={99.99} 
            image="https://images-na.ssl-images-amazon.com/images/I/41aTw6F6DDL.jpg"
            rating={3}
            />
            
            
            <Product 
            id="4"
            title="Monsoon Harvest Crunchy Millet Granola Bars - Cranberry & Orange - Pack of 6, Healthy Breakfast Bars (40 Grams Each)"
            price={19.99} 
            image="https://images-na.ssl-images-amazon.com/images/I/815O2payuXL._SL1500_.jpg"
            rating={4}
            />
            
            
            <Product 
            id="5"
            title="Davidoff Coffee, Rich Aroma, 100g Pack of 1"
            price={9.99} 
            image="https://images-na.ssl-images-amazon.com/images/I/31HHZCyqTyL.jpg"
            rating={4}
            />
               
                 {/* Product */}
                  {/* Product */}
                   {/* Product */}
            </div>

            <div className="home_row">
                
                
            <Product 
            id="6"
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            price={1529.99} 
            image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._SL1500_.jpg"
            rating={5}
            />


            </div>


           </div>

        </div>
    )
}

export default Home;
