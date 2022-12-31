import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPress} from "../../redux/actions/action";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import CardPrensaGrafica from "./CardPrensaGrafica";
import styles from "./PrensaGrafica.module.css"


const PrensaGrafica = () => {
  const dispatch = useDispatch();
  const press = useSelector((state) => state.press);
  
  useEffect(() => {
   
    dispatch(getPress());
  }, [dispatch]);
  return(
    <div>
     <NavBar/>
     <div className={styles.card}>
     {press?.map((el) => {
            return (
             
                
                  <CardPrensaGrafica
                    key={el._id}
                    img={el.img}
                    media={el.media}
                    date={el.date}
                    title={el.title}
                    description={el.description}
                  />
                
              
            );
          })}
          </div>
     <Footer/>
    </div>
  )
}
export default PrensaGrafica;