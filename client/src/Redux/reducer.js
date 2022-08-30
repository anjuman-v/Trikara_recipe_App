import { AUTH, LOADING, FETCH_DATA } from './actionTypes';


const initialState = {
    loading : true,
    auth : true,
    recipeObj : [],
   
}

export const reducer = ( state = initialState, { type, payload}) => {
    switch(type) {
           case FETCH_DATA:
                return { ...state, recipeObj : payload}
       
            case AUTH:
                return{ ...state, auth : payload}
       
            case LOADING:
                 return { ...state, loading : payload}
        
            default:
                return state
    }
}