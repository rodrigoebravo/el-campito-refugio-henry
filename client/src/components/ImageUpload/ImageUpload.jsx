import React from "react"
// import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Container, FormGroup, Input } from "reactstrap"  // too Modal
import { postCloudinaryPhoto, removeCloudinayImage } from "../../redux/actions/action"
import styles from "./ImageUpload.module.css"

//para que funcione el hook hacer npm intall react-hook-form

const ImagenUpload = () => {    
    
    const dispatch = useDispatch();
    
    const cloudImages = useSelector(state => state.imagesCloudinary);

    const uploadImage = async (e) => {
        console.log(e.target.files);
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'el_campito_ONG'); //CAMBIAR POR VARIABLE DE ENTORNO
        console.log(data.append);
        dispatch(postCloudinaryPhoto(data))
    };

    const handleDelete = (e)=> {
        const link = e.target.value;
        dispatch(removeCloudinayImage(link))
    };

    // const handleSubmit = (data) => {
    //     console.log(data)
    //     dispatch(postCloudinaryPhoto(data))
    // };

    return(

   
    <div id="Image">
         <div >
         {/* <form    onSubmit={(e) => handleSubmit(e)} > */}
            <label className={styles.title}>Product Image</label>
            <Container>
                <FormGroup>
                <Input
                    type="file"
                    name="image"
                    placeholder="📷 fotografía"
                    onChange={(e) => uploadImage(e)}
                    className={styles.upload}
                />
                </FormGroup>
            </Container>
            <div className="lista de imagenes">
                        { cloudImages.length < 1 ? null :
                            cloudImages.map( (el, index) =>
                                <div className="borra image" key={`o${index}`}>
                                <p>{el}</p>
                                <img src={el} alt="Girl in a jacket" width="500" ></img>
                                <button value={el} onClick={(e)=>handleDelete(e)}>X</button>
                                </div>)
                        }
            </div>
                                
            {/* <input type="submit" value="send"/> */}
        </div >                
    </div>
   

    )
}

export default ImagenUpload