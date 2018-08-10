import { createStore, combineReducers, applyMiddleware } from 'redux';
import { projectReducer, filterReducer, appConfigReducer } from '../reducers/projectReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const defaultState = {
    projects: [], 
    filterTags: [],
    appConfig: {
        pageTransition: false, //when true start page fade out animation 
        transitionDuration: 500 //miliseconds
    }
}
window.state = defaultState;
const reducers = combineReducers({
    filterTags: filterReducer,
    projects: projectReducer,
    appConfig: appConfigReducer
});
const store = createStore(reducers, defaultState, applyMiddleware(thunk, logger));

export default store;