import React, {useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext)

    const updateCurrency = (currencyValue) => {
        dispatch(
            {
                type: 'CHG_CURRENCY',
                payload: currencyValue,

            }
        )

    }
    return(
        <div>
            <div className="dropdown btn btn-secondary ">
                <label style={{marginRight: '0.5em'}}>Currency: </label>
                <select name="currency" defaultValue={currency} onChange={(e)=> {
                        updateCurrency(e.target.value)
                    }}>
                    <option value='$'>$ Dollar</option>
                    <option value='£'>£ Pound</option>
                    <option value='€'>€ Euro</option>
                    <option value='₹'>₹ Ruppee</option>
                </select>
            </div>
        </div>
    )
}

export default Currency; 