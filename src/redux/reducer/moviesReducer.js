import { ALLMOVIES } from './../types/movieTypes';

const initialValue = {movies:[] , pageCount: 0}

//reducer has :
// store --> empty array will return data and page count  that will send to me
// action --> type = "ALLMOVIES" return all data ,,else return state(any)
const MovieReducer = (state = initialValue , action) => {
    switch(action.type)
    {
        case ALLMOVIES :
                //data => payload
            return {movies: action.data , pageCount: action.pages}
            default:
                return state;
    }
}


export default MovieReducer;