import { createStore, combineReducers } from 'redux';
import { projectReducer, filterReducer, appConfigReducer } from '../reducers/projectReducer';

const defaultState = {
    projects: [{
        "id": "1",
        "title": "Simon Game",
        "url": "https://codepen.io/endzi007/full/veyBdK/",
        "picture": "https://image.ibb.co/hzjtxn/simon_Game.png",
        "tags": ["javascript", "svg", "game"]
    },
    {
        "id": "2",
        "title": "Tic-Tac-Toe game",
        "url": "https://codepen.io/endzi007/full/PmXBBd/",
        "picture": "https://image.ibb.co/h9qNq7/tic_Tac_Toe.png",
        "tags": ["javascript", "algorithm", "minimax", "game" ]
    },
    {
        "id": "3",
        "title": "Recipe App",
        "url": "https://endzi007.github.io/recipeApp/",
        "picture": "https://image.ibb.co/kA5Nq7/recipe_App.png",
        "tags": ["javascript", "react", "flux", "bootstrap" ]
    },
    {
        "id": "4",
        "title": "Game of life",
        "url": "https://github.com/endzi007/game-of-life",
        "picture": "https://image.ibb.co/mhetxn/game_Of_Life.png",
        "tags": ["javascript", "react", "flux", "bootstrap", "algorithm" ]
      }
], 
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
const store = createStore(reducers, defaultState);

export default store;