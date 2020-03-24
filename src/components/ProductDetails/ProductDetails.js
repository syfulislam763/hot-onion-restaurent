import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import './ProductDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const ProductDetails = () => {
    const {productId} = useParams();
    const item = fakeData.find(it => it.id == productId);
    const {foodName, details, img, price} = item;
    const [count, setCount] = useState(1);
    const [value, setValue] = useState(price);
    const decrement = () => {
        setCount(count - 1);
        setValue(value - price);
        if(count === 1){
            setCount(1);
            setValue(price)
        }
    }
    const increment = () => {
         setCount(count + 1);
         setValue(value + price);
        
    }
    

    return (
        <div className="details">
            <div className="text-content">
                <h1>{foodName}</h1>
                <p>{details}</p>
                <p style={{fontWeight:'600'}}>Price: ${value}</p>
                <div className="count">
                    <button onClick={decrement}>-</button>
                    <span>{count}</span>
                    <button onClick={increment}>+</button>
                </div>
                <br/>
                
                <button className="Add-button"><FontAwesomeIcon icon={faShoppingCart}/>Add</button>
            </div>
            <div className="image">
                <img src={img} alt=""/>
            </div>
        </div>
    );
};

export default ProductDetails;