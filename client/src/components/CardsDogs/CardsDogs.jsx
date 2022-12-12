import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs,filterDogsByGender,filterDogsByAge, filterDogsBySize} from "../../redux/actions/action";
import CardDog from "../CardDog/CardDog";
import PaginateDogs from "../PaginationDogs/PaginationDogs";
import { Link } from "react-router-dom";
import style from "./CardsDogs.module.css";
import Loading from "../Loading/Loading";
import Filters from "../Filters/Filters";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const CardsDogs = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  let lastItemPerPage = currentPage * itemsPerPage;
  let firsItemPerPage = lastItemPerPage - itemsPerPage;
  let currentPageItems = allDogs?.slice(firsItemPerPage, lastItemPerPage);

  function pagination(page) {
    // console.log(page - 1, "soy page ");
    setCurrentPage(page);
  }

  function filterGender(e){ //filtrado por Genero
    e.preventDefault();
    dispatch(filterDogsByGender(e.target.value));
    setCurrentPage(1);
  }
  function filterAge(e){ //filtrado por Edad
    e.preventDefault();
    dispatch(filterDogsByAge(e.target.value));
    setCurrentPage(1);
  }
  function filterSize(e){
    e.preventDefault();
    dispatch(filterDogsBySize(e.target.value));
    setCurrentPage(1);
  }
  useEffect(() => {
    // dispatch(getUsers());
    dispatch(getDogs());
  }, [dispatch]);

  if (!currentPageItems) {
    return <Loading />;
  } else if (currentPageItems.length === 0) {
    return <Loading />;
  } else {
    return (
      <div className={style.divContainer}>
        <Link to={"/"} className={style.btnBack}>
          <ArrowBackIcon />
        </Link>
        <h2 className={style.h2}>Conocenos Nuestros Perritos</h2>
        <div>
          <Filters filterGender={filterGender} filterAge={filterAge} filterSize={filterSize}/>
        </div>
        <div className={style.divCards}>
          {/* {console.log(allDogs)} */}
          {currentPageItems?.map((dog) => {
            return (
              <div key={dog._id} className={style.card}>
                <Link to={"/adoptar/perros/" + dog._id} className={style.Link}>
                  <CardDog
                    key={dog._id}
                    img={dog.images[0]}
                    name={dog.name}
                    gender={dog.gender}
                    id={dog._id}
                  />
                </Link>
              </div>
            );
          })}
        </div>
        <PaginateDogs
          paginationFunction={pagination}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
        />
      </div>
    );
  }
};
