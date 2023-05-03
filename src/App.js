import React from 'react';
import {Header} from './components/Header'
import{Balance} from './components/Balance'
import {IncomeExpenses} from './components/IncomeExpenses'
import {TransactionList} from './components/TransactionList'
import{AddTransaction} from './components/AddTransaction'
import{GlobalProvider} from './context/GlobalState'
import Piechart from './components/Piechart';

import './App.css';

function App() {
  return (
    <GlobalProvider>
    <Header/>
    <div className="container">
     <Balance/>
     <IncomeExpenses/>
     <TransactionList/>
     <AddTransaction/>
    </div>

    <div className="container2">
     <Piechart/>
    </div>
    </GlobalProvider>
  );
}

export default App;
