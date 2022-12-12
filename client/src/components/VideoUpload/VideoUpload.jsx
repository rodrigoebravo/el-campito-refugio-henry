import React from "react"
// import { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { postCloudinaryVideo } from "../../redux/actions/action"

//para que funcione el hook hacer npm intall react-hook-form

const VideoUpload = () => {
    
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const cloudVideo = useSelector(state => state.videoCloudinary);

 
    const onSubmit = (data) => {
        console.log(data)
        dispatch(postCloudinaryVideo(data))
    };

    return(
        <div>
            <h2>Subir archivo:</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
               
                <div>
                    <label>Subir Video</label>
                    <input 
                        type="file" {...register('video', {required: false})}
                        placeholder="carga el video"
                    />                    
                </div>
                <div className="video en store">
                    { !cloudVideo ? null : <p>{cloudVideo }</p> }
                </div>
                               
                <input type="submit" value="send"/>
            </form>
        </div> 
    )
}

export default VideoUpload