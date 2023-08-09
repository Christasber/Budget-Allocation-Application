import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [newBudget, setnewBudget] = useState(budget); // Initialize with the context budget value

    const handleBudgetChange = (setnewBudget) => {
        const updatedBudget = [...newBudget].map((newBudget) =>{
            if (newBudget !== setnewBudget){
                newBudget.number = setnewBudget;
            
            }
            return updatedBudget;
        });
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget
        });
    };
    
        <div className='alert alert-secondary'>
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
