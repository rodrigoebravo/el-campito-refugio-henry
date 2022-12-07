import axios from 'axios'
import {  } from './types'


export function postDogs(payload){
    return async function() {
      const post = await axios.post('http://localhost:3001/', payload)
      return post
    }
  }