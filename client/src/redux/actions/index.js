// require('dotenv').config();
import axios from 'axios'
import { CLEAR_CLOUDINARY_RESPONSE } from './types'


export function postDogs(payload){
    return async function() {
      const post = await axios.post('http://localhost:3001/api/dogs', payload)
      return post
    }
}

export const postCloudinaryPhoto = (postData) => {
  return async (dispatch) => {
    const json = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.KEY_CLOUDINARY}/image/upload`, postData)
    return dispatch({
      type: GET_CLOUDINARY_RESPONSE,
      payload: json.data
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