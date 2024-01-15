import { ALLMOVIES , MovieApi } from "../types/movieTypes"
import  axios  from "axios";



export const getAllMovie = () => {
    //dispatch here is just parameter,
    //but it looks like the role of dispatch
    return async(dispatch) => {
    const res = await axios.get(MovieApi);
    //type here is "ALLMOVIES"
    //so it will return results, that return from API
    dispatch ({type: ALLMOVIES , data:res.data.results , pages: res.data.total_pages})
    }
}

export const getAMovieSearch = (word) => {
    //dispatch here is just parameter,
    //but it looks like the role of dispatch
    return async(dispatch) => {
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d870f89b7bb98b7399f281842bd8003a&query=${word}&language=en`);
    dispatch ({type: ALLMOVIES , data:res.data.results , pages: res.data.total_pages})
    }
}


export const getPage = (page) => {
    
    //dispatch here is just parameter,
    //but it looks like the role of dispatch
    return async(dispatch) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=d870f89b7bb98b7399f281842bd8003a&language=en&page=${page}`);
    dispatch ({type: ALLMOVIES , data:res.data.results , pages: res.data.total_pages})
    }
}


