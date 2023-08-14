
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
        </div>
    );
};
export default Budget;
            <span>Budget: 
                <input
                    
                    step= "10"
                    required
                    type='number'
                    id='budget'
                    value={setnewBudget}
                    style={{ marginLeft: '2rem' }}
                    onChange={handleBudgetChange()}
                />
            </span>
        </div>
    
};

export default Budget;
