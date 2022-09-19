import { AUTH, LOADING, FETCH_DATA  } from './actionTypes';


export const setAuth = (payload) => ({type: AUTH, payload })
export const setLoading = (payload) => ({ type: LOADING, payload})
export const setData = (payload) => ({ type: FETCH_DATA, payload})


export const fetchData = (url) => async (dispatch) => {
    const token = JSON.parse(localStorage.getItem('token'))
    dispatch(setLoading(true))
    const res = await fetch(url, {
        method : "GET",
        headers : {
            Authorization : `Bearer ${token}`
        }
    })
    const response = await res.json()
    const data = response;
    dispatch(setLoading(false))
    dispatch(setData(data))

}


export const deleteData = (url) => async (dispatch) => {
    const token = JSON.parse(localStorage.getItem('token'))
    dispatch(setLoading(true))

    const a = await fetch(url, {
        method : "DELETE",
        headers : {
            Authorization : `Bearer ${token}`
        }
    })
    
    const res = await fetch("https://trikararecipeapi.herokuapp.com/recipes", {
        method : "GET",
        headers : {
            Authorization : `Bearer ${token}`
        }
    })
    const response = await res.json()
    const data = response;
    dispatch(setLoading(false))
    dispatch(setData(data))

    
    

}




//https://trikararestapi.herokuapp.com