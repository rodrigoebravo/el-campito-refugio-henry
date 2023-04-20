import {
  CLEAR_CLOUDINARY_RESPONSE,
  GET_CLOUDINARY_RESPONSE,
  GET_USERS,
  GET_DOGS,
  GET_DOGS_DETAILS,
  CLEAR_DETAILS,
  CLEAR_ALL_DOGS,
  FILTER_DOGS_BY_GENDER,
  FILTER_DOGS_BY_AGE,
  FILTER_DOGS_BY_SIZE,
  POST_VOLUNTEER,
  POST_ADOPTION,
  POST_CONTRIBUTION,
  GET_PRESS,
  GET_USERS_EMAIL,
  POST_CONTACTO,
  GET_PROYECTOS
} from './types';
import axios from 'axios';

import dotenv from "dotenv";
dotenv.config();
// const {NAME_CLOUDINARY} = process.env;



export function postDog(payload) {
  return async function () {
    const post = await axios.post("/api/dogs", payload);
    return post;
  };
}

export default function postMeli(title, unit_price) {
  return async function () {
    const post = await axios
      .post("/mercadopago", title, unit_price)
      .then((res) => (window.location.href = res.data.init_point));
    return post;
  };
}

export const postCloudinaryPhoto = (postData) => {
  return async (dispatch) => {
    console.log(postData); // dman2cjk5
    const json = await axios.post(
      `https://api.cloudinary.com/v1_1/dman2cjk5/image/upload`,
      postData
    );
    console.log(json.data.secure_url);
    return dispatch({
      type: GET_CLOUDINARY_RESPONSE,
      payload: json.data.secure_url,
    });
  };
};

export const clearCloudinaryResponse = () => {
  return async function (dispatch) {
    dispatch({
      type: CLEAR_CLOUDINARY_RESPONSE,
    });
  };
};

export const getUsers = () => {
  return async function (dispatch) {
    try {
      let json = await axios("/api/users");
      return dispatch({
        type: GET_USERS,
        payload: json.data,
      });
    } catch {
      console.log("error en trar users");
    }
  };
};

export const getDogs = () => {
  return async function (dispatch) {
    try {
      let json = await axios("/api/dogs");
      let filterDeleted = json.data.filter((e) => e.isDelete === false);
      // console.log(filterDeleted);
      return dispatch({
        type: GET_DOGS,
        payload: filterDeleted,
      });
    } catch {
      console.log("error en traer dogs");
    }
  };
};
export const getDogsDetails = (id) => {
  return async function (dispatch) {
    try {
      let json = await axios("/api/dogs/" + id);
      return dispatch({
        type: GET_DOGS_DETAILS,
        payload: json.data,
      });
    } catch {
      console.log("error en traer dogs");
    }
  };
};

export function clearDetails() {
  return {
    type: CLEAR_DETAILS,
  };
}
export function clearDogs() {
  return {
    type: CLEAR_ALL_DOGS,
  };
}

export function filterDogsByGender(payload) {
  return {
    type: FILTER_DOGS_BY_GENDER,
    payload,
  };
}
export function filterDogsByAge(payload) {
  return {
    type: FILTER_DOGS_BY_AGE,
    payload,
  };
}
export function filterDogsBySize(payload) {
  return {
    type: FILTER_DOGS_BY_SIZE,
    payload,
  };
}
export function postVolunteer(data) {
  return async (dispatch) => {
    console.log(data);
    const json = await axios.post(`/api/volunteers`, data);
    console.log(json.data);
    return dispatch({
      type: POST_VOLUNTEER,
      payload: json.data,
    });
  };
}
export function postAdoption(data) {
  return async (dispatch) => {
    console.log(data);
    const json = await axios.post(`/api/adoptions`, data);
    console.log(json.data);
    return dispatch({
      type: POST_ADOPTION,
      payload: json.data,
    });
  };
}
export function postContribution(data) {
  return async (dispatch) => {
    console.log(data);
    const json = await axios.post(`/api/contributions`, data);
    console.log(json.data);
    return dispatch({
      type: POST_CONTRIBUTION,
      payload: json.data,
    });
  };
}

export const getPress = () => {
  return async function (dispatch) {
    try {
      let json = await axios("/api/press");
      return dispatch({
        type: GET_PRESS,
        payload: json.data,
      });
    } catch {
      console.log("error en traer press");
    }
  };
};

export const getProyectos= () => {
  return async function (dispatch) {
    try {
      let json = await axios("/api/escolar")
      return dispatch({
        type: GET_PROYECTOS,
        payload: json.data
      })
    } catch {
      console.log("error en traer proyectos")
    }
  }
}

export function registerFunction(payload) {
  return async function () {
    const post = await axios.post("/api/auth/register", payload);
    return post;
  };
}

export function loginFunctionA0(payload) {
  return async function () {
    const post = await axios.post("/api/auth/login", payload);
    return post;
  };
}

export const getUsersEmail = () => {
  return async function (dispatch) {
    try {
      let json = await axios("/api/users");
      let json2 = json.data.map((e) => e.email);
      return dispatch({
        type: GET_USERS_EMAIL,
        payload: json2,
      });
    } catch {
      console.log("error en trar users EMAIL");
    }
  };
};
export function dataProfile(id) {
  return async function (dispatch) {
    try {
      const userEmail = await axios.get(
        `/api/users/${id}`
      );
      return dispatch({
        type: "GET_USERS_PROFILE",
        payload: userEmail.data.email,
      });
      // console.log(userEmail.data.email);
    } catch {
      console.log("error al traer datos");
    }
  };
}

export const postContacto = (data) => {
  return async function (dispatch) {
    try {
      await axios.post("/api/contacto", data);
      console.log(data);
      return dispatch({
        type: POST_CONTACTO,
      });
    } catch {
      console.log("error en envio de consulta: contacto");
    }
  };
};

export function getSlider() {
  return async function (dispatch) {
    const responce = await axios("/api/interfaces");
    const arrayImg = responce.data[0].slider;
    return dispatch({
      type: "GET_SLIDER",
      payload: arrayImg,
    });
  };
}
