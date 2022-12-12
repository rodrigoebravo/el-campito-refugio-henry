import {
    POST_DOG,
    POST_USER,
    GET_CLOUDINARY_RESPONSE, VIDEO_CLOUDINARY_RESPONSE,
    CLEAR_CLOUDINARY_RESPONSE, CLEAR_CLOUDINARY_VIDEO,
    REMOVE_CLOUDINARY_IMAGE,
    GET_USERS,
    GET_DOGS,
    GET_DOGS_DETAILS,
    CLEAR_DETAILS,
    CLEAR_ALL_DOGS
} from '../actions/types'

const initialState = {
    dog: {},
    user: {},
    detailsDogs: [],
    allUsers: [],
    allDogs: [],
    responseCloudinary: [],
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

            return {
                ...state,
                responseCloudinary: [...state.responseCloudinary, ...action.payload]
            }
        case CLEAR_CLOUDINARY_RESPONSE:
            return {
                ...state,
                responseCloudinary: []
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
        case CLEAR_CLOUDINARY_VIDEO:
            return {
                ...state,
                videoCloudinary: ""
            }
        default:
            return {
                ...state
            }
    }
}

