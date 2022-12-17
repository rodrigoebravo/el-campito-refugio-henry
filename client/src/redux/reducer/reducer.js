import {
    POST_DOG,
    POST_USER,
    GET_CLOUDINARY_RESPONSE, 
    VIDEO_CLOUDINARY_RESPONSE,
    CLEAR_CLOUDINARY_RESPONSE, 
    REMOVE_CLOUDINARY_IMAGE,
    GET_USERS,
    GET_DOGS,
    GET_DOGS_DETAILS,
    CLEAR_DETAILS,
    CLEAR_ALL_DOGS,
    FILTER_DOGS_BY_GENDER,
    FILTER_DOGS_BY_AGE,
    FILTER_DOGS_BY_SIZE
} from '../actions/types'

const initialState = {
    dogs: [],
    user: {},
    detailsDogs: [],
    allUsers: [],
    allDogs: [],
    responseCloudinary: "",
    imagesCloudinary: [],
    videoCloudinary: ""

}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                allUsers: action.payload
            }
        case GET_DOGS:
            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload
            }
        case GET_DOGS_DETAILS:
            return {
                ...state,
                detailsDogs: action.payload
            }
        case CLEAR_DETAILS:
            return {
                detailsDogs: []
            }

        case CLEAR_ALL_DOGS:
            return {
                allDogs: []
            }

        case POST_DOG:
            return {
                ...state,
                dog: action.payload
            }
        case POST_USER:
            return {
                ...state,
                dog: action.payload
            }
        case GET_CLOUDINARY_RESPONSE:
            const link =  action.payload;
            return {
                ...state,
                responseCloudinary: link,
                imagesCloudinary: [...state.imagesCloudinary, link]
            }
        case REMOVE_CLOUDINARY_IMAGE:
            const imagesFilter = state.responseCloudinary.filter(i => i !== action.payload)
            return {
                ...state,
                responseCloudinary: imagesFilter
            }
        case VIDEO_CLOUDINARY_RESPONSE:

            return {
                ...state,
                videoCloudinary: action.payload
            }
        case CLEAR_CLOUDINARY_RESPONSE:
            return {
                ...state,
                videoCloudinary: "",
                imagesCloudinary: "",
                responseCloudinary: []
            }
        case FILTER_DOGS_BY_GENDER:
            const filtredByGender = state.allDogs
            const dogsFiltered = action.payload === 'All' ? filtredByGender : filtredByGender.filter(el => el.gender === action.payload)
            if (dogsFiltered.length === 0) {
                alert("No se encontraron perros con ese filtro")
                return {
                    ...state,
                    dogs: filtredByGender
                }
            } else {
                return {
                    ...state,
                    dogs: dogsFiltered
                }
            }

        case FILTER_DOGS_BY_AGE:
            const filtredByAge = state.allDogs
            const dogsFilteredByAge = action.payload === 'All' ? filtredByAge : filtredByAge.filter(el => el.age === action.payload)
            if (dogsFilteredByAge.length === 0) {
                alert("No se encontraron perros con ese filtro")
                return {
                    ...state,
                    dogs: filtredByAge
                }
            } else {
                return {
                    ...state,
                    dogs: dogsFilteredByAge
                }

            }
        case FILTER_DOGS_BY_SIZE:
            const filtredBySize = state.allDogs
            const dogsFilteredBySize = action.payload === 'All' ? filtredBySize : filtredBySize.filter(el => el.size === action.payload)
            if (dogsFilteredBySize.length === 0) {
                alert("No se encontraron perros con ese filtro")
                return {
                    ...state,
                    dogs: filtredBySize
                }
            } else {
                return {
                    ...state,
                    dogs: dogsFilteredBySize
                }
            }
        default:
            return {
                ...state
            }
    }
}

