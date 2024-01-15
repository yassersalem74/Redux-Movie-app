import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';

import MovieReducer from './../reducer/moviesReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


//1-create store
const store = createStore(MovieReducer , applyMiddleware(thunk));
                                        

export default store;