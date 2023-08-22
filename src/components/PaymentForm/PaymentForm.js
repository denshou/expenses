import React, { useState } from "react";

import "./PaymentForm.css";

const PaymentForm = ({ getPaymentFormData }) => {
  const [objectState, setObjectState] = useState({
    name: "",
    price: 0,
    today: new Date(),
  });

  const inputTextHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };

  const inputPriceHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      price: event.target.value,
    }));
  };

  const inputTodayHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      today: event.target.value,
    }));
  };
  const colorChange = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      color: event.target.value,
    }));
  };
  const type1Change = (event) => {
    setObjectState((prevState) => ({ ...prevState, type: event.target.value }));
  };
  const type2Change = (event) => {
    setObjectState((prevState) => ({ ...prevState, type: event.target.value }));
  };
  const checkboxChange = () => {
    setObjectState((prevState) => ({
      ...prevState,
      check: !objectState.check,
    }));
    console.log(objectState.check);
  };

  const buttonSubmitHander = (event) => {
    event.preventDefault();

    getPaymentFormData(objectState);
    // console.log(objectState);

    setObjectState({
      name: "",
      price: 0,
      today: new Date(),
	  color: "#000000",
      type: "",
      check: false,
    });
  };

  return (
    <div className="new-payment">
      <form onSubmit={buttonSubmitHander}>
        <div className="new-payment__controls">
          <div className="new-payment__control">
            <label>이름</label>
            <input
              type="text"
              onChange={inputTextHandler}
              value={objectState.name}
            />
          </div>
          <div className="new-payment__control">
            <label>금액</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={inputPriceHandler}
              value={objectState.price}
            />
          </div>
          <div className="new-payment__control">
            <label>날짜</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              onChange={inputTodayHandler}
              value={objectState.today}
            />
          </div>
          <div className="new-payment__control__color">
            <label>색상</label>
            <input
              type="color"
              className="color-input"
              value={objectState.color}
              onChange={colorChange}
            />
          </div>
          <div>
            <label>타입</label>
            <div className="type">
              <input
                type="radio"
                className="check"
                id="check1"
                name="type"
                value="A"
                onChange={type1Change}
              />
              <label htmlFor="check1">A</label>
            </div>
            <div className="type">
              <input
                type="radio"
                className="check"
                id="check2"
                name="type"
                value="B"
                onChange={type2Change}
              />
              <label htmlFor="check2">B</label>
            </div>
          </div>
          <div>
            <label>약관</label>
            <div className="agree">
              <input
                type="checkbox"
                className="check"
                id="check3"
                checked={objectState.check}
                name="yes"
                onChange={checkboxChange}
              />
              <label htmlFor="check3">동의</label>
            </div>
          </div>
        </div>
        <div className="new-payment__actions">
          <button type="submit">결제 추가</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
