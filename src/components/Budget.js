import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [inputBudget, setInputBudget] = useState(budget); // Initialize with the context budget value

    const handleBudgetChange = (event) => {
        const Budget = {
            cost: 10,
        };

        dispatch({
            type: 'SET_BUDGET',
            payload: Budget
        });

    return (
        <div className='alert alert-secondary'>
            <span>Budget: 
                <input
                    min= "2000"
                    max= "20000"
                    step= "10"
                    required
                    type='number'
                    id='budget'
                    value={inputBudget}
                    style={{ marginLeft: '2rem' }}
                    onChange={handleBudgetChange}
                />
            </span>
        </div>
    );
};

export default Budget;
