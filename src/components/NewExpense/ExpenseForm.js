import React, {useState} from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [expense,setExpense] = useState('')
  const [date,setDate] = useState('')
  const [amount,setAmount] = useState('')




  const expenseInputChangeHandler = (event) => {
    setExpense(event.target.value)
    return;
  };

  const dateInputChangeHandler = (event) => {
    setDate(event.target.value)
    return;
  };

  const amountInputChangeHandler = (event) => {
    setAmount(event.target.value);
    
    return
  };

  const submitFormHandler = (event) => {
    event.preventDefault()
    const expenseData = {
      title: expense,
      date: new Date(date),
      amount: amount
    }
    props.onSaveExpenseData(expenseData)

    setExpense('')
    setDate('')
    setAmount('')
    return;
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            placeholder="Add Expense"
            onChange={expenseInputChangeHandler}
            value={expense}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            placeholder="Add Date"
            onChange={dateInputChangeHandler}
            value={date}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            placeholder="Add Amount"
            onChange={amountInputChangeHandler}
            value={amount}
          />
          <button className="new-expense__actions" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
