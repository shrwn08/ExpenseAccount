import React from "react";
import "./expense.css";

const Expense = ({ closePopupExpense, expHandler, expElement, expRecordHandler}) => {


  return (
    <div className="expense-container">
      <div className="expense">
        <p className="expense-heading">Add Expenses</p>
        <div className="input-expense-container">
          <input
            type="text"
            name="titleInput"
            className="exp-title"
            placeholder="Title"
            onChange={ expRecordHandler}
            value={expElement.titleInput}
          />
          <input
            type="text"
            name="priceInput"
            className="exp-price"
            placeholder="Price"
            onChange={ expRecordHandler}
            value={expElement.priceInput}
          />
          <input
            type="text"
            className="exp-category"
            placeholder="Select Category"
            name="category"
            onChange={ expRecordHandler}
            value={expElement.category}
          />
          <input
            type="text"
            name="date"
            className="exp-date"
            placeholder="Date"
            onChange={ expRecordHandler}
            value={expElement.date}
          />
          <button
            type="button"
            className="add-expense-btn"
            onClick={expHandler}
          >
            Add Expense
          </button>
          <button
            type="button"
            className="cancel-expense-btn"
            onClick={closePopupExpense}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Expense;
