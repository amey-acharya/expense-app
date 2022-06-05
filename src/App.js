import { useState } from "react";
import "./App.css";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";

function App(props) {
  const [expenses, setExpenses] = useState([
    {
      key: "e1",
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      key: "e2",
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      key: "e3",
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      key: "e4",
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      key: "e5",
      id: "e5",
      title: "something",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const [filteredExpense, setFilteredExpense] = useState([])

  const finalNewExpenseHandler = (newExpense) => {
    const expenseData = { ...newExpense };

    setExpenses((prev) => [
      ...prev,
      {
        key: "e6",
        id: "e6",
        title: expenseData.title,
        amount: expenseData.amount,
        date: new Date(expenseData.date),
      },
    ]);
    console.log(expenses);
  };

  const filteredYearHandler = (filterYear) => {
    setFilteredExpense([])
    const selectedYear = filterYear;
    console.log(selectedYear);
    const filteredExpensebyYear = expenses.filter((expenses) => {
      if (expenses.date.getFullYear() == selectedYear) {
        setFilteredExpense((prev) => [
          ...prev,
        {
          key: expenses.id,
          id: expenses.id,
          title: expenses.title,
          amount: expenses.amount,
          date: expenses.date,
        }])}
        return;
      }
    )
  };
  console.log(filteredExpense);
  return (
    <div className="app">
      <NewExpense onNewExpenseAdd={finalNewExpenseHandler} />
      <ExpenseFilter onChangeYear={filteredYearHandler} />
      <ExpenseItem expenses={filteredExpense} />
    </div>
  );
  }

export default App;
