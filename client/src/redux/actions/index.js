import dotenv from "dotenv";
dotenv.config();
import axios from 'axios'
import { 
  CLEAR_CLOUDINARY_RESPONSE,
  GET_CLOUDINARY_RESPONSE } from './types'


export function postDog(payload){
    return async function() {
      const post = await axios.post('/api/dogs', payload)
      return post
    }
}

export const postCloudinaryPhoto = (postData) => {
  return async (dispatch) => {
    const json = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NAME_CLOUDINARY}/image/upload`, postData)
    return dispatch({
      type: GET_CLOUDINARY_RESPONSE,
      payload: json.data.secure_url
    })
  }
}

export const clearCloudinaryResponse = () => {
  return async function (dispatch) {
      dispatch({
          type: CLEAR_CLOUDINARY_RESPONSE
      })
  };
}