import React, { useState } from 'react';
import fakeData from '../../fakeData/dinner'
import DinnerFood from '../DinnerFood/DinnerFood';

const Dinner = () => {
    const [dinner, setDinner] = useState(fakeData);
    return (
        <div>
            {
                dinner.map(din => <DinnerFood
                        key = {din.id}
                        dinnerFood = {din}
                        ></DinnerFood>)
            }
        </div>
    );
};

export default Dinner;