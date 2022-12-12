import {
  CLEAR_CLOUDINARY_RESPONSE,
  CLEAR_CLOUDINARY_VIDEO,
  GET_CLOUDINARY_RESPONSE,
  VIDEO_CLOUDINARY_RESPONSE,
  GET_USERS,
  REMOVE_CLOUDINARY_IMAGE,
  GET_DOGS,
  GET_DOGS_DETAILS,
  CLEAR_DETAILS,
  CLEAR_ALL_DOGS,
  FILTER_DOGS_BY_GENDER,
  FILTER_DOGS_BY_AGE,
  FILTER_DOGS_BY_SIZE
} from './types';
import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();



export function postDog(payload) {
  return async function () {
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

export const postCloudinaryVideo = (postData) => {
  return async (dispatch) => {
    const json = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.NAME_CLOUDINARY}/image/upload`, postData)
    return dispatch({
      type: VIDEO_CLOUDINARY_RESPONSE,
      payload: json.data.secure_url
    })
  }
}

export const clearVideoCloudinary = () => {
  return async function (dispatch) {
    dispatch({
      type: CLEAR_CLOUDINARY_VIDEO
    })
  };
}

export const getUsers = () => {
  return async function (dispatch) {
    try {
      let json = await axios("/api/users")
      return dispatch({
        type: GET_USERS,
        payload: json.data
      })
    } catch {
      console.log("error en trar users")
    }
  }
}

export const getDogs = () => {
  return async function (dispatch) {
    try {
      let json = await axios("/api/dogs")
      return dispatch({
        type: GET_DOGS,
        payload: json.data
      })
    } catch {
      console.log("error en traer dogs")
    }
  }
}
export const getDogsDetails = (id) => {
  return async function (dispatch) {
    try {
      let json = await axios("/api/dogs/" + id)
      return dispatch({
        type: GET_DOGS_DETAILS,
        payload: json.data
      })
    } catch {
      console.log("error en traer dogs")
    }
  }
}

export function clearDetails() {
  return ({
    type: CLEAR_DETAILS,
  })
}
export function clearDogs() {
  return ({
    type: CLEAR_ALL_DOGS,
  })
}

export function filterDogsByGender(payload) {
  return {
    type: FILTER_DOGS_BY_GENDER,
    payload
  }
}
export function filterDogsByAge(payload) {
  return {
    type: FILTER_DOGS_BY_AGE,
    payload
  }
}
export function filterDogsBySize(payload) {
  return {
    type: FILTER_DOGS_BY_SIZE,
    payload
  }
}


