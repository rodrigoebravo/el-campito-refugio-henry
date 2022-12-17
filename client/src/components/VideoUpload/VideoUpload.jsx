import React from "react"
// import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Container, FormGroup, Input } from "reactstrap"  // too Modal
import { postCloudinaryVideo } from "../../redux/actions/action"
import styles from "./VideoUpload.module.css"

//para que funcione el hook hacer npm intall react-hook-form

const VideoUpload = () => {    
    
    const dispatch = useDispatch();
    
    const cloudImages = useSelector(state => state.videoCloudinary);

    const uploadImage = async (e) => {
        const files = e.target.files;
        console.log(files);
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'el_campito_ONG'); //CAMBIAR POR VARIABLE DE ENTORNO
        dispatch(postCloudinaryVideo(data))
    };


 
    return(

   
    <div id="video">
         <div >
         {/* <form    onSubmit={(e) => handleSubmit(e)} > */}
            <label className={styles.title}>Product Image</label>
            <Container>
                <FormGroup>
                <Input
                    type="file"
                    name="video"
                    placeholder="📷 video"
                    onChange={(e) => uploadImage(e)}
                    className={styles.upload}
                />
                </FormGroup>
            </Container>
            <div className="url del video:">
                        { !cloudImages ? null :                            
                                <div className="video" >
                                    <p>{cloudImages}</p>                                
                                </div>
                        }
            </div>
                                
            {/* <input type="submit" value="send"/> */}
        </div >                
    </div>
   

    )
}

export default VideoUpload