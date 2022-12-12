import React from "react";
import NavBar from "../NavBar/NavBar"
import Form from "../Forms/Contacto/Contacto"
import Footer from "../Footer/Footer"
import Styles from "./Contactanos.module.css"

const Conocenos = () => {
    return(
        <>
            <NavBar/>
            <div className={Styles.mainContainer}>
                <Form/>
            </div>
            <Footer/>
        </>
    )
}

export default Conocenos;