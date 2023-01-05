import React from "react";
import { useSelector } from "react-redux";
import styles from "./PaginationDogs.module.css";

import { withStyles } from "@mui/material";

const PaginationDogs = ({ itemsPerPage, paginationFunction, currentPage }) => {
  const allDogs = useSelector((state) => state.allDogs);

  let pageDogs = [];
  let numOfPages = Math.ceil(allDogs?.length / itemsPerPage); // --> resultado total de paginas === 5

  for (let i = 1; i <= numOfPages; i++) {
    pageDogs.push(i);
  }

  return (
    <div className={styles.container}>
      <div className={withStyles.container2}>
        {currentPage > 1 ? (
          <button
            className={styles.buttonPagDog}
            onClick={() => paginationFunction(currentPage - 1)}
          >
            prev
          </button>
        ) : (
          <></>
        )}
        {/* 
        {pageDogs &&
          pageDogs.map((number) => {
            return (
              <li key={number}>
                <button onClick={() => paginationFunction(number)}>
                  {number}
                </button>
              </li>
            );
          })} */}

        {currentPage >= 0 && pageDogs.length > currentPage ? (
          <button
           className={styles.buttonPagDog}
            onClick={() => paginationFunction(currentPage + 1)}
          >
            next
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default PaginationDogs;
