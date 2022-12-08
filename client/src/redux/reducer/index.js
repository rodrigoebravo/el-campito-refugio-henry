import { 
        POST_DOG,
        POST_USER,
        GET_CLOUDINARY_RESPONSE,
        CLEAR_CLOUDINARY_RESPONSE,
        REMOVE_CLOUDINARY_IMAGE } from './types'

const initialState = {
    dog: {},
    user: {},
    responseCloudinary: []
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case POST_DOG:
            return{
                ...state,
                dog: action.payload
              }
        case POST_USER:
            return{
                ...state,
                dog: action.payload
              }     
        case GET_CLOUDINARY_RESPONSE:

            return{
                ...state,
                responseCloudinary: [...state.responseCloudinary,...action.payload]
            }
        case CLEAR_CLOUDINARY_RESPONSE:
            return{
                ...state,
                responseCloudinary: []
            }
        case REMOVE_CLOUDINARY_IMAGE:
            const imagesFilter = state.responseCloudinary.filter(i=> i !== action.payload)
            return{
                ...state,
                responseCloudinary: imagesFilter
            }
        default: 
            return {
              ...state
            }  
    }
}

