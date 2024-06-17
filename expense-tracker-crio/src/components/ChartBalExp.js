import React, { useEffect, useState } from 'react';
import './chartbalexp.css';
import CircularChart from './CircularChart';

const ChartBalExp = ({ addIncome, wallet, addExpense, expAmount, expRecord, catePriceData }) => {
    const [dataHolder, setDataHolder] = useState([]);

    useEffect(() => {
        if (Array.isArray(expRecord)) {
            const newDataHolder = [];

            expRecord.forEach(record => {
                for (let key in record) {
                    if (key !== 'date' && key !== 'category' && record[key] !== '') {
                        newDataHolder.push({ category: key, price: parseInt(record[key]) });
                    }
                }
            });

            setDataHolder(newDataHolder);
        } else {
            console.error('expRecord is not an array:', expRecord);
        }
    }, [expRecord]);

    const handleCategoryAndPriceData = () => {
        return dataHolder.map(item => ({
            category: item.category,
            price: item.price,
        }));
    };

    const categoryAndPriceData = handleCategoryAndPriceData();

    return (
        <div className='ChartBalExp'>
            <div className='bal-exp'>
                <div className='bal'>
                    <p className='bal-text'>Wallet Balance: <span className='bal-amount'>₹{wallet - expAmount}</span> </p>
                    <button className='bal-btn' onClick={addIncome}>+ Add Income</button>
                </div>
                <div className='exp'>
                    <p className='exp-text'>Expenses:  <span className='exp-amount'>₹{expAmount}</span></p>
                    <button className='exp-btn' onClick={addExpense}>+ Add Expense</button>
                </div>
            </div>
            <div className='chart'>
                <CircularChart data={catePriceData} />
            </div>
        </div>
    );
};

export default ChartBalExp;
