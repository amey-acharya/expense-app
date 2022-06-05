import React from 'react';

import './NewExpense/ExpenseFilter.css';

const ExpenseFilter = (props) => {
    const yearSelectorHandler = (event) => {
        const selectedYear = event.target.value
        props.onChangeYear(selectedYear)
    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={yearSelectorHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;