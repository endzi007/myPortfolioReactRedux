import { createStore, combineReducers, applyMiddleware } from 'redux';
import { projectReducer, filterReducer, appConfigReducer, fetchReducer } from '../reducers/projectReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const defaultState = {
    projects: [], 
    filterTags: [],
    appConfig: {
        pageTransition: false, //when true start page fade out animation 
        transitionDuration: 2000 //miliseconds
    }, 
    fetching: false
}
window.state = defaultState;
const reducers = combineReducers({
    filterTags: filterReducer,
    projects: projectReducer,
    appConfig: appConfigReducer,
    fetching: fetchReducer
});
const store = createStore(reducers, defaultState, applyMiddleware(thunk, logger));

export default store;