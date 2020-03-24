import React, { useState } from 'react';
import fakeData from '../../fakeData/lunch';
import LunchFood from '../LunchFood/LunchFood';

const Lunch = () => {
    const [lunch, setLunch] = useState(fakeData);
    return (
        <div>
            {
                lunch.map(lun => <LunchFood
                key = {lun.id}
                lunchfood = {lun}
                ></LunchFood>)
            }
        </div>
    );
};

export default Lunch;