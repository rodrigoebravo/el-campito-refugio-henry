import { 
  CLEAR_CLOUDINARY_RESPONSE,
  GET_CLOUDINARY_RESPONSE,
  REMOVE_CLOUDINARY_IMAGE } from './types';
import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();



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

export const removeCloudinayImage = (payload) => {
  return async function (dispatch) {
      dispatch({
          type: REMOVE_CLOUDINARY_IMAGE,
          payload
      })
  };
}