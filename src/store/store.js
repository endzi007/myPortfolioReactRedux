import { createStore, combineReducers } from 'redux';
import { projectReducer, filterReducer, pageTransition } from '../reducers/projectReducer';

const defaultState = {
    projects: [{
        "title": "Simon Game",
        "url": "https://codepen.io/endzi007/full/veyBdK/",
        "picture": "https://image.ibb.co/hzjtxn/simon_Game.png",
        "tags": ["javascript", "svg", "game"]
    },
    {
        "title": "Tic-Tac-Toe game",
        "url": "https://codepen.io/endzi007/full/PmXBBd/",
        "picture": "https://image.ibb.co/h9qNq7/tic_Tac_Toe.png",
        "tags": ["javascript", "algorithm", "minimax", "game" ]
    },
    {
      "title": "Recipe App",
      "url": "https://endzi007.github.io/recipeApp/",
      "picture": "https://image.ibb.co/kA5Nq7/recipe_App.png",
      "tags": ["javascript", "react", "flux", "bootstrap" ]
    },
    {
        "title": "Game of life",
        "url": "https://github.com/endzi007/game-of-life",
        "picture": "https://image.ibb.co/mhetxn/game_Of_Life.png",
        "tags": ["javascript", "react", "flux", "bootstrap", "algorithm" ]
      }
], 
    filterTags: [],
    pageTransition: false
}

const reducers = combineReducers({
    filterTags: filterReducer,
    projects: projectReducer,
    pageTransition: pageTransition
});
const store = createStore(reducers, defaultState);

export default store;