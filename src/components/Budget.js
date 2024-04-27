import React, { useContext, useState } from "react";
import { AppContext, AppReducer } from "../context/AppContext";


const Budget = () => {
    const {budget} = useContext(AppContext)
    const [budgetValue, setBudgetValue] = useState(budget)
    //AppReducer('SET_BUDGET', budgetValue)
    
    return (
    <div>
        <label>
            Budget: 
            <input name='budget' type='number' value={budgetValue} //onChange={
                //(e)=> {
                //setBudgetValue(e.target.value)
                
            //} 
            />
                
                {//setBudgetValue(e.target.value)}/>
                }
        </label>
        
    </div>
    )
}

export default Budget;