import React, { useState, useEffect } from "react";
import "./editExpense.css"; // Assuming the CSS file is in the same directory

const EditExpense = ({ closePopupEditExpense, expRecord, updateExpense }) => {
  const [editData, setEditData] = useState({
    titleInput: "",
    priceInput: "",
    category: "",
    date: "",
  });

  useEffect(() => {
    if (expRecord) {
      setEditData(expRecord);
    }
  }, [expRecord]);

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setEditData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEditSubmit = () => {
    updateExpense({
      ...editData,
      priceInput: parseInt(editData.priceInput),
    });
  };

  return (
    <div className="edit-expense">
      <div className="edit-exp-heading-input">
        <p className="edit-expense-heading">Edit Expense</p>
        <div className="edit-exp-inputs">
          <input
            type="text"
            className="edit-exp-title"
            name="titleInput"
            value={editData.titleInput}
            onChange={handleEditChange}
            placeholder="Title"
          />
          <input
            type="text"
            className="edit-exp-price"
            name="priceInput"
            value={editData.priceInput}
            onChange={handleEditChange}
            placeholder="Price"
          />
          <input
            type="text"
            className="edit-exp-category"
            name="category"
            value={editData.category}
            onChange={handleEditChange}
            placeholder="Category"
          />
          <input
            type="text"
            className="edit-exp-date"
            name="date"
            value={editData.date}
            onChange={handleEditChange}
            placeholder="Date"
          />
          <button
            type="button"
            className="edit-add-expense-btn"
            onClick={handleEditSubmit}
          >
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
