import React from "react";
import { useSelector } from "react-redux";

const PaginateDogs = ({ itemsPerPage, paginationFun }) => {
  const allDogs = useSelector((state) => state.allDogs);

  let pages = [];
  let numOfPages = Math.ceil(allDogs.length / itemsPerPage); // --> resultado total de paginas === 5

  for (let i = 1; i <= numOfPages; i++) {
    pages.push(i);
  }
  console.log(pages, "soy pages");
  return (
    <div>
      <ul>
        {pages &&
          pages.map((number) => {
            return (
              <li key={number}>
                <button onClick={() => paginationFun(number)}>{number}</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default PaginateDogs;
