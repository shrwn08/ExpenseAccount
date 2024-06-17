import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./transaction-history.css";
import Delete from "../asset/delete-icon.png";
import Edit from "../asset/edit-icon.png";

const TransactionHistory = ({ expRecord, onClick, handleDeleteHistory }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleEditClick = (index) => {
    onClick(index);
  };

  const paginatedItems = expRecord.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="transaction-container">
      {paginatedItems.map((item, index) => (
        <div key={index} className="history">
          <div className="logo-title-date">
            <div>Logo</div>
            <div className="title-date">
              <div className="item-title">{item.titleInput}</div>
              <div className="item-date">{item.date}</div>
            </div>
          </div>
          <div className="price-delete-edit">
            <div className="item-price">₹{parseInt(item.priceInput)}</div>
            <button
              className="delete-button"
              onClick={() => handleDeleteHistory(index)}
            >
              <img className="delete-image" src={Delete} alt="delete" />
            </button>
            <button
              className="edit-button"
              onClick={() => handleEditClick(index)}
            >
              <img className="edit-image" src={Edit} alt="edit" />
            </button>
          </div>
        </div>
      ))}
      <div className="pagination-container">
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(expRecord.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </Stack>
      </div>
    </div>
  );
};

export default TransactionHistory;
