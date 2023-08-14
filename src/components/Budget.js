import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext); // Get budget and dispatch from context

    function handleBudgetChange(event) {
        const newBudget = parseInt(event.target.value); // Parse the input value to an integer
        if (newBudget >= 2000 && newBudget <= 20000) {
            dispatch({
                type: "SET_BUDGET",
                payload: newBudget,
            });
        } else if (newBudget < 2000) {
            alert("Budget Cannot Be Below 2000");
        } else {
            alert("Budget Cannot Exceed 20000");
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>
                Budget: 
                <input
                    step="10"
                    required
                    type='number'
                    id='budget'
                    value={budget}
                    style={{ marginLeft: '2rem' }}
                    onChange={handleBudgetChange} // Use the function reference
                />
            </span>
        </div>
    );
};

export default Budget;

