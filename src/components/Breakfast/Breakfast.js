import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData/breakfast';
import BreakfastFood from '../BreakfastFood/BreakfastFood';

const Breakfast = () => {
    const [item, setItems] = useState(fakeData);
    return (
        <div>
            {
                item.map(pd => <BreakfastFood 
                key={pd.id}
                product={pd}>
                </BreakfastFood>)
            }
        </div>
    );
};

export default Breakfast;