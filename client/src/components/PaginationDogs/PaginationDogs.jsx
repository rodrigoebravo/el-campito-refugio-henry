import React from "react";
import { useSelector } from "react-redux";
import style from "./PaginationDogs.module.css";
import Button from "@mui/material/Button";

const PaginationDogs = ({ itemsPerPage, paginationFunction, currentPage }) => {
  const allDogs = useSelector((state) => state.allDogs);

  let pageDogs = [];
  let numOfPages = Math.ceil(allDogs?.length / itemsPerPage); // --> resultado total de paginas === 5

  for (let i = 1; i <= numOfPages; i++) {
    pageDogs.push(i);
  }

  return (
    <div className={style.container}>
      <div className={style.container2}>
        {currentPage > 1 ? (
          <Button
            sx={{margin: "0 1rem"}}
            variant="contained"
            onClick={() => paginationFunction(currentPage - 1)}
          >
            prev
          </Button>
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
          <Button
          sx={{margin: "0 1rem"}}
            variant="contained"
            onClick={() => paginationFunction(currentPage + 1)}
          >
            next
          </Button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default PaginationDogs;
