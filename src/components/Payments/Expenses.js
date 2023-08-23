import React, { useEffect, useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  // filter를 걸어 줄 연도를 상태로 관리
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear); // filter값이 바뀔 때 마다 업데이트
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  }); // filteredYear와 같은 연도의 expense만 필터링

  const [limit, setLimit] = useState("1000");

  const getCostData = (data) => {
    // data = costState
    setLimit(data);
  };

  const costFilteredExpenses = props.items.filter((expense) => {
    return expense.amount <= limit;
  });

  let expensesContent = <p>값이 없습니다.</p>;
  //filteredExpenses가 없으면 값이 없습니다
  // if (filteredExpenses.length > 0) {
  if (costFilteredExpenses.length > 0) {
    //값이 하나라도 있다면
    expensesContent = costFilteredExpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        id={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
        color={item.color}
        type={item.type}
        check={item.check}
        deleteExpenseItem={props.deleteExpenseItem}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
        getCostData={getCostData}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
