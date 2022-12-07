import React from "react";
import { useForm } from "react-hook-form"

//para que funcione el hook hacer npm intall react-hook-form

const FormPostDogs = () => {
    
    const { register, handleSubmit } = useForm();

    return(
        <div>
            <h2>Agregar perro</h2>
            <form>
                <div>
                    <label>Nombre</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Genero</label>
                    <input type="text" />
                </div>
            </form>
        </div> 
    )
}

export default FormPostDogs