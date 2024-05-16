import React, { useContext, useState } from "react";
import { AppContext, AppReducer } from "../context/AppContext";


const Budget = () => {
    const {budget, spentsofar, currency} = useContext(AppContext)
    const [budgetValue, setBudgetValue] = useState(budget)
    if (budgetValue > 20000) {
        alert("The budget cannot exceed 20,000.")
        setBudgetValue(20000)
    }
    if (budgetValue < spentsofar ) {
        alert("Cannot reduce the budget to less than the current spending: £" + spentsofar)
        setBudgetValue(spentsofar)
    }
    

    AppReducer('SET_BUDGET', budgetValue)

    
    return (
    <div>
        <label>
            Budget:  <span style={{marginRight: '0.5rem'}}>{currency} </span>
            <input style={{width: 150}} name='budget' type='number' step='10' value={budgetValue} onChange={(e)=> {setBudgetValue(e.target.value)}} />
        </label>
        
    </div>
    )
}

export default Budget;