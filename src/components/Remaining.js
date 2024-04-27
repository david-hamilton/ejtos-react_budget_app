import React, {useContext } from "react";
import { AppContext } from "../context/AppContext";
//import { AppProvider } from "../context/AppContext";


const Remaining = () => {
    const {remaining, currency} = useContext(AppContext)
    console.log(remaining)    
    return (<div>
        Remaining: {currency}{remaining}

    </div>)
}

export default Remaining;