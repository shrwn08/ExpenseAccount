import React, { useState, useEffect } from "react";
import "./editExpense.css";

const EditExpense = ({ closePopupEditExpense, expRecord, updateExpense}) => {
  const [editRecord, setEditRecord] = useState({
    titleInput: "",
    priceInput: "",
    category: "",
    date: "",
  });
  useEffect(() => {
    if (expRecord) {
      setEditRecord(expRecord);
    }
  }, [expRecord]);

  const handleEditRecord = (event) => {
    const { name, value } = event.target;
    setEditRecord((prevRecord) => ({ ...prevRecord, [name]: value }));
  };

  const handleUpdateExpense = () => {
    updateExpense(editRecord);
  };
  return (
    <div className="edit-expense">
      <div className="edit-exp-heading-input">
        <p className="edit-expense-heading">Edit Expense</p>
        <div className="edit-exp-inputs">
          <input type="text" className="edit-exp-title" placeholder="Title" value={editRecord.titleInput}
            onChange={handleEditRecord}/>
          <input type="text" className="edit-exp-price" placeholder="Price"  value={editRecord.priceInput}
            onChange={handleEditRecord}/>
          <input
            type="text"
            className="edit-exp-category"
            placeholder="select Category"
            value={editRecord.category}
            onChange={handleEditRecord}
          />
          <input type="text" className="edit-exp-date" placeholder="Date" value={editRecord.date}
            onChange={handleEditRecord}/>
          <button type="button" className="edit-add-expense-btn" onClick={handleUpdateExpense}>
            Add Expense
          </button>
          <button
            type="button"
            className="edit-cancel-expense-btn"
            onClick={closePopupEditExpense}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditExpense;
