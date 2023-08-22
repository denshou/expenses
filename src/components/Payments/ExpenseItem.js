import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="addi" style={{ backgroundColor: props.color }}>
          {props.color}
        </div>
        <div className="addi">{props.type}</div>
        <div className="addi">{props.check.toString()}</div>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={() => props.deleteExpenseItem(props.id)}>삭제</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
