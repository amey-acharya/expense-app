import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense(props) {
    const newExpenseHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData
        }
        props.onNewExpenseAdd(expenseData)
    }

  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={newExpenseHandler}/>
    </div>
  )
}

export default NewExpense