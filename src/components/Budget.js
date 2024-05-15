import React, { useContext, useState } from "react";
import { AppContext, AppReducer } from "../context/AppContext";


const Budget = () => {
    const {budget, spentsofar} = useContext(AppContext)
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
            Budget:  
            <input name='budget' type='number' step='10' value={budgetValue} onChange={(e)=> {setBudgetValue(e.target.value)}} />
        </label>
        
    </div>
    )
}

export default Budget;