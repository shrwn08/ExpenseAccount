import React from "react";
import "./income.css";

const Income = ({ closePopup, addBalance, input, inputBalance }) => {
  return (
    <div className="income-container">
      <div className="add-income">
        <p className="income-heading">Add Balance</p>
        <div className="income-input-container">
          <input
            type="text"
            placeholder="Income Amount"
            onChange={input}
            value={inputBalance}
            className="add-income-input"
          />
          <button type="button" className="add-income-btn" onClick={addBalance}>
            Add Balance
          </button>
          <button
            type="button"
            className="cancel-income-btn"
            onClick={closePopup}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Income;
