import React from "react";
import "./ExpenseItem.css";

function ExpenseItem({expenses}) {
  
  return expenses.map((expense) => {
    const day = expense.date.toLocaleString("en-US", { day: "2-digit" });
    const month = expense.date.toLocaleString("en-US", { month: "long" });
    const year = expense.date.getFullYear();
    const amount = Number(expense.amount).toFixed(2);

    return (
      <div className="expense-item">
        <div className="expense-item__item">
          <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-daye__year">{year}</div>
          </div>
        </div>
        <div className="expense-item__description">
          <h2>{expense.title}</h2>
          <div className="expense-item__price">
            ${amount}
          </div>
        </div>
      </div>
    );
  });
}

export default ExpenseItem;
