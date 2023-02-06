import React, { useEffect, useState } from "react";
// import style from "./Dashboard.module.css"
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../../redux/actions/action";
import CardDog from "../CardDog/CardDog";
import NavAdmin from "../NavAdmin/NavAdmin";
import style from "./AdminDogs.module.css";
import { Link } from "react-router-dom";
import PaginateDogs from "../PaginateDogs/PaginateDogs";

const AdminDogs = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);
  // const allUser = useSelector((state) => state.allUsers);
  // console.log(allDog);

  //pagination
  // let [currentPage, setCurrentPage] = useState(1);
  // const [dogPerPage] = useState(10);
  // const lastDog = currentPage * dogPerPage
  // const firstDog = currentPage * lastDog - currentPage
  // const currentDogs = allDogs.slice(firstDog,lastDog)

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  // console.log(allDogs.length)

  //necesito 3 variables para saber cuantos items tengo y saber cuantas paginas voy a necesitar
  let lastItemPerPage = currentPage * itemsPerPage;
  let firsItemPerPage = lastItemPerPage - itemsPerPage;
  let currentPageItems = allDogs?.slice(firsItemPerPage, lastItemPerPage);

  console.log(currentPageItems);
  function pagination(page) {
    // console.log(page - 1, "soy page ");
    setCurrentPage(page);
  }

  useEffect(() => {
    // dispatch(getUsers());
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <div>
      <NavAdmin />
      <div>
        <div className={style.divspecs}>
          <div className={style.divNames}>
            <h3>Imagen</h3>
          </div>
          <div className={style.divNames}>
            <h3>Nombre</h3>
          </div>
          <div className={style.divNames}>
            <h3>Genero</h3>
          </div>
          <div className={style.divNames}>
            <h3>Edad</h3>
          </div>
        </div>
        <div className={style.Cards}>
          {currentPageItems?.map((dog) => {
            return (
              <div key={dog._id}>
                <Link to={"/admin/Perros/" + dog._id} className={style.Link}>
                  <CardDog
                    key={dog._id}
                    img={dog.images[0]}
                    name={dog.name}
                    age={dog.age}
                    gender={dog.gender}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <PaginateDogs paginationFun={pagination} itemsPerPage={itemsPerPage} />
    </div>
  );
};

export default AdminDogs;
