import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [incomeText, setIncomeText] = useState('');
  const [incomeAmount, setIncomeAmount] = useState('');
  const [expenseText, setExpenseText] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const addIncome = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: incomeText,
      amount: +incomeAmount
    }

    addTransaction(newTransaction);
    setIncomeText('');
    setIncomeAmount('');
  }

  const addExpense = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: expenseText,
      amount: -expenseAmount
    }

    addTransaction(newTransaction);
    setExpenseText('');
    setExpenseAmount('');
  }

  return (
    <>
      <h3>Add New Income</h3>
      <form onSubmit={addIncome}>
        <div className="form-control">
          <label htmlFor="incomeText">Text</label>
          <input type="text" value={incomeText} onChange={(e) => setIncomeText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="incomeAmount">Amount</label>
          <input type="number" value={incomeAmount} onChange={(e) => setIncomeAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add Income</button>
      </form>

      <h3>Add New Expense</h3>
      <form onSubmit={addExpense}>
        <div className="form-control">
          <label htmlFor="expenseText">Text</label>
          <input type="text" value={expenseText} onChange={(e) => setExpenseText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="expenseAmount">Amount</label>
          <input type="number" value={expenseAmount} onChange={(e) => setExpenseAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn1">Add Expense</button>
      </form>
    </>
  )
}