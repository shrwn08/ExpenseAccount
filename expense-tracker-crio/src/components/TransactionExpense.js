import React from "react";
import "./transaction-expense.css";
import TransactionHistory from "./TransactionHistory";
import BarChartRecord from "./BarChartRecord";

const TransactionExpense = ({ expRecord, data, onClick, handleDeleteHistory }) => {
  return (
    <div className="trasns-exp">
      <div className="transaction-chart">
        <TransactionHistory
          expRecord={expRecord}
          onClick={onClick}
          handleDeleteHistory={handleDeleteHistory}
        />
      </div>
      <div className="expense-chart">
        <BarChartRecord data={data} />
      </div>
    </div>
  );
};

export default TransactionExpense;
