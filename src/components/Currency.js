import React, {useContext, useState} from "react";
import { AppContext, AppReducer } from "../context/AppContext";

const Currency = () => {
    const {currency} = useContext(AppContext)
    const {newCurrency, setNewCurrency} = useState(currency)
    
    AppReducer('CHG_CURRENCY', newCurrency)

    return(
        <div>
            <div className="dropdown btn btn-secondary dropdown-toggle">
                <label>Currency: </label>
                <select name="currency" value={newCurrency} onChange={(e)=> console.log(e.target.value)}>
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