
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
 
    return (
        <div className='alert alert-secondary'>
            <span>Budget: 
                <input
                    
                    step= "10"
                    required
                    type='number'
                    id='budget'
                    value={Budget}
                    style={{ marginLeft: '2rem' }}
                    onChange={handleBudgetChange()}
                />
            </span>
            </div>)
    function handleBudgetChange(){
        if (budget <= 20000)
        {if (budget >= 2000){
        dispatch({
            type: "SET_BUDGET",
            payload: budget,
        })}
        else {alert ("Budget Cannot Be Below 2000")}}
        else {alert ("Budget Cannot Exceed 20000")}
    
            
             };
};
        
    
    


export default Budget;

