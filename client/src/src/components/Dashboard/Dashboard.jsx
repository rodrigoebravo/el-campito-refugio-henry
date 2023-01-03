
import React,{useEffect} from "react";
import style from "./Dashboard.module.css"
import { useDispatch, useSelector } from "react-redux";
import NavAdmin from "./NavAdmin/NavAdmin";
import{getUsers,getDogs} from "../../redux/actions/action"

const Dashboard = () => {
  const dispatch = useDispatch();
  const allUser = useSelector((state) => state.allUsers); 
  // const allDog = useSelector((state) => state.allDogs); 
  // console.log(allDog)
  console.log(allUser[0])
  
  
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <div className={style.div}>

      <div>
        <NavAdmin />
      </div>
      
      <div>info</div>
      <div>users o dogs</div>
    </div>
  );
};

export default Dashboard;
