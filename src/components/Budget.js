
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const { dispatch,remaining  } = useContext(AppContext);
    function handleBudgetChange(){
        if (budget <= 20000)
        {if (budget >= 2000){
        dispatch({
            type: "SET_BUDGET",
            payload: budget,
        })}
        else {alert ("Budget Cannot Be Below 2000")}}
        else {alert ("Budget Exceed 20000")}
    return (
       
            <span>Budget: 
                <input
                    
                    step= "10"
                    required
                    type='number'
                    id='budget'
                    value={budget}
                    style={{ marginLeft: '2rem' }}
                    onChange={handleBudgetChange()}
                />
            </span>
            
            );
             }
            
        };
    
    


export default Budget;
