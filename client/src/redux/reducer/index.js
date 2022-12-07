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
        default: 
            return {
              ...state
            }  
    }
}

