import React, { useState } from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  const [costState, setCostState] = useState(1000);

  const costHandler = (event) => {
    setCostState(event.target.value);
    // props.getCostData(costState);
  };
  const costSubmitHandler = (event) =>{
    event.preventDefault();
    props.getCostData(costState);
  }

  return (
    <div className="expenses-filter">
      {/* <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div> */}
      <div className="expenses-filter__control">
        <label>Filter by cost</label>
        <div>
          <input
            type="range"
            id="cost-input"
            value={costState}
            onChange={costHandler}
            min="0"
            max="1000"
            step="1"
          />
          <p>
            Cost: <output id="value">{costState}</output>
          </p>
          <button type="submit" onClick={costSubmitHandler}>확인</button>
        </div>
      </div>
    </div>
  );
};

export default ExpensesFilter;
