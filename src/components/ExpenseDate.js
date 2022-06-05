import React from "react";

function ExpenseDate({ props }) {
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const year = props.date.getFullYear()
  return (
    <div className="expense-date">
      <div className="expensedate">{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
}
export default ExpenseDate;
