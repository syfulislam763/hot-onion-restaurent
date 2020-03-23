import React from 'react';
import './BreakfastFood.css';

const BreakfastFood = (props) => {
    console.log(props.product)
    const {img, foodName, description, price} = props.product;
    return (
        <div className="breakfast">
            <div className="breakfast-item">
                <div className="img-part">
                    <img style={{width:'100px',height:'auto'}} src={img} alt="img"/>
                </div>
                <div className="text-part">
                    <h5 style={{margin:'0px',fontWeight:'500',fontSize:'14px'}}>{foodName}</h5>
                    <p style={{margin:'0px',fontSize:'13px'}}>{description}</p>
                    <h5 style={{margin:'0px',fontWeight:'500',fontSize:'14px'}}>${price}</h5>
                </div>
            </div>
        </div>
    );
};

export default BreakfastFood;