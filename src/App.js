import { useState } from "react";
import "./App.css";
import PaymentForm from "./components/PaymentForm/PaymentForm";
import Expenses from "./components/Payments/Expenses";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "수건",
      amount: 12.33,
      date: new Date(2022, 3, 14),
      color: "#a892ee",
      type: "A",
      check: true,
    },
    {
      id: "e2",
      title: "물티슈",
      amount: 234.11,
      date: new Date(2023, 8, 22),
      color: "#40005D",
      type: "B",
      check: false,
    },
    {
      id: "e3",
      title: "루랑",
      amount: 999,
      date: new Date(2022, 8, 22),
      color: "#974715",
      type: "A",
      check: false, 
    },
    {
      id: "e4",
      title: "물티슈",
      amount: 777,
      date: new Date(2022, 12, 22),
      color: "#285627",
      type: "B",
      check: false,
    },
  ]);

  const getPaymentFormData = (data) => {
    setExpenses([
      {
        id: Math.random().toString(),
        title: data.name,
        amount: data.price,
        date: new Date(data.today),
        color: data.color,
        type: data.type,
        check: data.check,
      },
      ...expenses,
    ]);
  };

  const deleteExpenseItem = (id) => {
    const newFilteredArray = expenses.filter((item) => item.id !== id);
    setExpenses(newFilteredArray);
  };

  return (
    <>
      <PaymentForm getPaymentFormData={getPaymentFormData} />
      <Expenses items={expenses} deleteExpenseItem={deleteExpenseItem} />
    </>
  );
}

export default App;
