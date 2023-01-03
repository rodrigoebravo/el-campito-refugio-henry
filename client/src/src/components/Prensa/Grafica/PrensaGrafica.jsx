import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import { getPress} from "../../../redux/actions/action";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import CardPrensaGrafica from "./CardPrensaGrafica";
import styles from "./PrensaGrafica.module.css"
import press from "./prensa.json"


const PrensaGrafica = () => {
  const dispatch = useDispatch();
 // const press = useSelector((state) => state.press);
  
  useEffect(() => {
   
    dispatch(getPress());
  }, [dispatch]);
  return(
    <div className={styles.container}>
     <NavBar/>
     <h2 className={styles.h2Prensa}>Prensa Grafica</h2>
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
                    link={el.link}
                  />
                
              
            );
          })}
          </div>
     <Footer/>
    </div>
  )
}
export default PrensaGrafica;