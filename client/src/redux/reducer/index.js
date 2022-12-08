import { POST_DOGS } from './types'

const initialState = {
    dogs: []
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case POST_DOGS:
            return{
                ...state
              }
        case GET_CLOUDINARY_RESPONSE:
            return{
                ...state,
                responseCloudinary: action.payload
            }
        case CLEAR_CLOUDINARY_RESPONSE:
            return{
                ...state,
                responseCloudinary: {}
            }
        default: 
            return {
              ...state
            }  
    }
}

