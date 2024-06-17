import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import Income from "./components/PopComponents/Income";
import "./App.css";
import Expense from "./components/PopComponents/Expense";
import EditExpense from "./components/PopComponents/EditExpense";

function App() {
  const [popUpAddIncome, setPopUpAddIncome] = useState(false);
  const [popUpAddExpense, setPopUpAddExpense] = useState(false);
  const [popUpEditExpense, setPopUpEditExpense] = useState(false);
  const [amountInwallet, setAmountInwallet] = useState(5000);
  const [balanceBtn, setBalanceBtn] = useState(false);
  const [inputBalance, setInputBalance] = useState("");
  const [expAmount, setExpAmount] = useState(0);
  const [expensesData, setExpensesData] = useState([]);
  const [expenseRecord, setExpenseRecord] = useState({
    titleInput: "",
    priceInput: "",
    category: "",
    date: "",
  });
  const [catePriceData, setCatePriceData] = useState([]);
  const [editExpenseRecord, setEditExpenseRecord] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  // Handling input changes for expense record
  const handleExpenseRecord = (event) => {
    const { name, value } = event.target;
    setExpenseRecord((prevRecord) => ({ ...prevRecord, [name]: value }));
  };

  // Adding an expense record
  const handleExpense = () => {
    const newExpense = {
      ...expenseRecord,
      priceInput: parseInt(expenseRecord.priceInput),
    };
    setExpAmount((prevExp) => prevExp + newExpense.priceInput);
    setExpensesData((prevExpensesData) => [...prevExpensesData, newExpense]);
    setCatePriceData((prevCatePriceData) => [
      ...prevCatePriceData,
      {
        category: newExpense.category,
        price: newExpense.priceInput,
      },
    ]);
    setExpenseRecord({
      titleInput: "",
      priceInput: "",
      category: "",
      date: "",
    });
    handleClosePopupExpense();
  };

  // Handling input changes for balance
  const handleInputBalance = (event) => {
    setInputBalance(event.target.value);
  };

  // Adding balance to wallet
  const handleAddBalance = () => {
    setAmountInwallet((prevAmount) => prevAmount + parseInt(inputBalance));
    setBalanceBtn(true);
    handleClosePopupIncome();
  };

  // Opening and closing modals
  const handleAddIncomeClick = () => {
    setPopUpAddIncome(true);
    setInputBalance("");
  };

  const handleClosePopupIncome = () => {
    setPopUpAddIncome(false);
  };

  const handleAddExpenseClick = () => {
    setPopUpAddExpense(true);
  };

  const handleClosePopupExpense = () => {
    setPopUpAddExpense(false);
  };

  const handleAddEditExpenseClick = (index) => {
    setEditExpenseRecord(expensesData[index]);
    setEditIndex(index);
    setPopUpEditExpense(true);
  };

  const handleClosePopupEditExpense = () => {
    setPopUpEditExpense(false);
    setEditExpenseRecord(null);
    setEditIndex(null);
  };

  // Delete transaction history
  const handleDeleteHistory = (index) => {
    const updatedExpensesData = expensesData.filter((_, i) => i !== index);
    setExpensesData(updatedExpensesData);

    const deletedExpense = expensesData[index];
    setCatePriceData((prevCatePriceData) =>
      prevCatePriceData.filter((item, i) => i !== index)
    );

    setExpAmount((prevExp) => prevExp - deletedExpense.priceInput);
  };

  // Update expense record
  const handleUpdateExpense = (updatedExpense) => {
    const updatedExpensesData = expensesData.map((expense, index) =>
      index === editIndex ? updatedExpense : expense
    );
    setExpensesData(updatedExpensesData);

    const updatedCatePriceData = catePriceData.map((data, index) =>
      index === editIndex
        ? { category: updatedExpense.category, price: updatedExpense.priceInput }
        : data
    );
    setCatePriceData(updatedCatePriceData);

    handleClosePopupEditExpense();
  };

  useEffect(() => {
    // Placeholder for future side-effects
  }, [expensesData, catePriceData]);

  return (
    <div className="App">
      <Main
        isBlurIncome={popUpAddIncome}
        isBlurExpense={popUpAddExpense}
        isBlurEditExpense={popUpEditExpense}
        addExpense={handleAddExpenseClick}
        addIncome={handleAddIncomeClick}
        wallet={amountInwallet}
        expAmount={expAmount}
        expRecord={expensesData}
        catePriceData={catePriceData}
        openingEditExpense={handleAddEditExpenseClick}
        handleDeleteHistory={handleDeleteHistory}
      />
      {popUpAddIncome && (
        <Income
          closePopup={handleClosePopupIncome}
          inputBalance={inputBalance}
          input={handleInputBalance}
          addBalance={handleAddBalance}
        />
      )}
      {popUpAddExpense && (
        <Expense
          closePopupExpense={handleClosePopupExpense}
          expRecordHandler={handleExpenseRecord}
          expRecord={expenseRecord}
          expElement={expenseRecord}
          expHandler={handleExpense}
        />
      )}
      {popUpEditExpense && (
        <EditExpense
          closePopupEditExpense={handleClosePopupEditExpense}
          expRecord={editExpenseRecord}
          updateExpense={handleUpdateExpense}
        />
      )}
    </div>
  );
}

export default App;
