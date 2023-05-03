import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';

const Piechart = () => {
  const { transactions } = useContext(GlobalContext);

  // Compute the total balance, income, and expenses
  const totalBalance = transactions.reduce((acc, curr) => acc + curr.amount, 0);
  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, curr) => acc + curr.amount, 0);
  const totalExpenses = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, curr) => acc + curr.amount, 0);

  // Compute the percentage of each value relative to the total
  const balancePercentage = Math.abs((totalBalance / totalIncome) * 100);
  const incomePercentage = Math.abs((totalIncome / totalIncome) * 100);
  const expensesPercentage = Math.abs((totalExpenses / totalIncome) * 100);

  // Create an array of objects with the category name and percentage
  const data = [
    { name: 'Balance', value: balancePercentage },
    { name: 'Income', value: incomePercentage },
    { name: 'Expenses', value: expensesPercentage },
  ];

  return (
    <PieChart width={400} height={400}>
      <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default Piechart;
