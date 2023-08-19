import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext); 
        function chgCurrency(event){
            const newCurrency = event.target.value;
            dispatch({
                type: "CHG_CURRENCY",
                payload: newCurrency,
            });
        }
        return(
            <div className='alert alert-secondary'
            style={{ background: "greenyellow" }}>
            <span> Currency: </span>
            <select onChange= {chgCurrency} 
            style={{ background: "greenyellow" }}
            value = {currency}
            >
            
            <option value="$" name= "dol">$ Dollar</option>
            <option value="£">£ Pound</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Ruppee</option>
            </select>
            
            </div>
        );
    };

    export default Currency;