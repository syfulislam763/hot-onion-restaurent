import React from 'react';
import { Link } from 'react-router-dom';

const DinnerFood = (props) => {
    const { img, foodName, description, price, id} = props.dinnerFood;
    return ( 
        <div className = "breakfast" >
            <div className = "breakfast-item" >
                <Link style={{textDecoration:'none',color:'gray'}} to = {"/details/"+ id} >
                    <div className = "img-part" >
                            <img style = {{ width: '100px', height: 'auto' } } src = { img } alt = "img" />
                    </div> 
                    <div className = "text-part" >
                        <h5 style = {{ margin: '0px', fontWeight: '500', fontSize: '14px' } } > { foodName } </h5> 
                        <p style = {{ margin: '0px', fontSize: '13px' } } > { description } </p> 
                        <h5 style = {{ margin: '0px', fontWeight: '500', fontSize: '14px' } } > $ { price } </h5> 
                    </div> 
                </Link>
            </div> 
        </div>
    );
};

export default DinnerFood;