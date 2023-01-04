import React from "react";
import Navbar from '../Navbar/NavBar'
import Form from "../Forms/Contacto/Contacto"
import Footer from "../Footer/Footer"
import Styles from "./Contactanos.module.css"

const Conocenos = () => {
    return(
        <>
            <Navbar/>
            <div className={Styles.mainContainer}>
                <Form/>
            </div>
            <Footer/>
        </>
    )
}

export default Conocenos;