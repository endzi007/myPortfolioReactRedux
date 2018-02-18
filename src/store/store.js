import { createStore, combineReducers } from 'redux';
import { projectReducer, filterReducer } from '../reducers/projectReducer';

const defaultState = {
    projects: [{
        "title": "Simon Game",
        "url": "https://codepen.io/endzi007/full/veyBdK/",
        "picture": "https://image.ibb.co/nf5svn/simon_game.png",
        "tags": ["javascript", "svg", "game"]
    },
    {
        "title": "Tic-Tac-Toe game",
        "url": "https://codepen.io/endzi007/full/PmXBBd/",
        "picture": "https://www.cookieshq.co.uk/images/2016/06/01/tic-tac-toe.png",
        "tags": ["javascript", "algorithm", "minimax", "game" ]
    },
    {
      "title": "Recipe App",
      "url": "https://endzi007.github.io/recipeApp/",
      "picture": "https://preview.ibb.co/i1GAgS/recipe_app.png",
      "tags": ["javascript", "react", "flux", "bootstrap" ]
    }], 
    filterTags: []
}

const reducers = combineReducers({
    filterTags: filterReducer,
    projects: projectReducer
});
const store = createStore(reducers, defaultState);

export default store;