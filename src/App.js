import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal'
import ExpenseList from './components/ExpenseList'
import ExpenseItem from './components/ExpenseItem'
import AllocationForm from './components/AllocationForm'

import { AppProvider } from './context/AppContext';
import Currency from './components/Currency';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-4'>
                        <div className='col-3 bg-light p-3' > 
                            <Budget />
                            
                        </div>
                        <div className='col-3 bg-success' >
                            <Remaining />
                        </div>
                        <div className='col-3'>
                            <ExpenseTotal />
                        </div>
                        <div className='col-3'>
                            <Currency />
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div>
                            <ExpenseList />
                        </div>
                        <div>
                            <ExpenseItem />
                        </div>
                        <div>
                            <AllocationForm />
                        </div>
                    </div>
                
            </div>
        </AppProvider>
    );
};
export default App;
