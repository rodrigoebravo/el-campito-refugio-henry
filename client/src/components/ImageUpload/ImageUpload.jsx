import React from "react"
// import { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { postCloudinaryPhoto, removeCloudinayImage } from "../../redux/actions/action"

//para que funcione el hook hacer npm intall react-hook-form

const ImagenUpload = () => {
    
    const dispatch = useDispatch();
    const { register, handleSubmit, formState:{ errors } } = useForm();

    const cloudImages = useSelector(state => state.responseCloudinary);

    const handleDelete = (e)=>{
        e.preventDefault();   
        dispatch(removeCloudinayImage(e.value));        
    };

    const onSubmit = (data) => {
        console.log(data)
        dispatch(postCloudinaryPhoto(data))
    };

    return(
        <div>
            <h2>Subir archivo:</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
               
                <div>
                    <label>Subir Imagen</label>
                    <input 
                        type="file" {...register('image', {required: true})}
                        placeholder="carga la imagen"
                    />
                    {errors.name?.type === 'required' && <p>La imagen es requerida</p>}
                </div>
                <div className="lista de imagenes">
                    { cloudImages?.map( (el, index) =>
                        <div className="borra image" key={`o${index}`}>
                        <p>{el}</p>
                        <button value={el} onClick={(e)=>handleDelete(e)}>X</button>
                        </div>)
                    }
                </div>
                               
                <input type="submit" value="send"/>
            </form>
        </div> 
    )
}

export default ImagenUpload