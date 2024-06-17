import React from "react";
import "./main.css";
import ChartBalExp from "./ChartBalExp";
import TransactionExpense from "./TransactionExpense";

const Main = ({
  isBlurIncome,
  isBlurExpense,
  isBlurEditExpense,
  addExpense,
  addIncome,
  wallet,
  expAmount,
  expRecord,
  catePriceData,
  handleDeleteHistory,
  openingEditExpense,
}) => {
  return (
    <div className={`main ${isBlurIncome || isBlurExpense || isBlurEditExpense ? "blured" : ""}`}>
      <p className="App-name">Expense Tracker</p>
      <ChartBalExp
        addIncome={addIncome}
        wallet={wallet}
        addExpense={addExpense}
        expAmount={expAmount}
        catePriceData={catePriceData}
      />
      <div className="recent-top">
        <p className="recent-transactions">Recent Transactions</p>
        <p className="top-expenses">Top Expenses</p>
      </div>
      <TransactionExpense
        expRecord={expRecord}
        data={catePriceData}
        onClick={openingEditExpense}
        handleDeleteHistory={handleDeleteHistory}
      />
    </div>
  );
};

export default Main;
