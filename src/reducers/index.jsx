
import { counterReducer } from './counter';
import { isLoggedReducer } from './isLogged';
import {combineReducers} from 'redux';

export const allReducers = combineReducers({
    counter:counterReducer,
    isLogged:isLoggedReducer
});
