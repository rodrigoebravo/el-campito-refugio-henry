import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, FormGroup, Input } from "reactstrap";
import { postCloudinaryPhoto, clearCloudinaryResponse } from "../../../redux/actions/action";
import styles from "./ImageUpload.module.css";

   
const ImagenUpload = () => {    
     
    const dispatch = useDispatch();
    
    const cloudImages = useSelector(state => state.responseCloudinary);

   


    const uploadImage = async (e) => {
        console.log(e.target.files);
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'el_campito_ONG'); //CAMBIAR POR VARIABLE DE ENTORNO
        
        dispatch(postCloudinaryPhoto(data))
    };

    const handleDelete = ()=> {        
        dispatch(clearCloudinaryResponse())
    };


    return(

   
        <div id="Image">
            <div >
            {/* <form    onSubmit={(e) => handleSubmit(e)} > */}
                <label className={styles.title}>Image</label>
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
                
                <div className="image">
                            { !cloudImages ? null :                            
                                    <div className="video" >
                                        <button  onClick={(e)=>handleDelete(e)}>X</button>
                                        <img src={cloudImages} alt="algo falló" width="300" ></img>                                                              
                                    </div>
                            }
                </div>
                        
                                    
                {/* <input type="submit" value="send"/> */}
            </div >                
        </div>  

    )
}

export default ImagenUpload