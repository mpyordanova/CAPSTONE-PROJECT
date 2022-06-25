import * as api from '../api';  //*as mean we import everything from actions as api

//actions creators-functions that return an action

export const getPosts = () => async (dispatch)=> {
    try{
        const {data} = await api.fetchPosts();
        dispatch({type: 'FETCH_ALL', payload: data})  //not returning but dispatching the action

    } catch (error){
        console.log(error.message)

    }
}