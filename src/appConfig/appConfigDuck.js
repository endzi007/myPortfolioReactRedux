export const types = {
    START_PAGE_TRANSITION: "appConfig/START_PAGE_TRANSITION",
    FETCH_PROJECTS_START: "appConfig/FETCH_PROJECTS_START",
    FETCH_PROJECTS_OK: "appConfig/FETCH_PROJECTS_OK",
    FETCH_CATEGORIES_BAD: "appConfig/FETCH_CATEGORIES_BAD",
    SHOW_DRAWER_AND_CARDS: "appConfig/SHOW_DRAWER_AND_CARDS",
    CURRENT_HOVER: "appConfig/CURRENT_HOVER",
    CURRENT_THEME: "appConfig/CURRENT_THEME"
}


export const creators = {
    startPageTransition: (start)=>({type: types.START_PAGE_TRANSITION, payload: start}),
    showDrawerAndCards: (bool)=>({type: types.SHOW_DRAWER_AND_CARDS, payload: bool}),
    currentHover: (str) =>({type: types.CURRENT_HOVER, payload: str}),
    currentTheme: str =>({type: types.CURRENT_THEME, payload: str})

}

export let defaultState = {
    pageTransition: false, //when true start page fade out animation 
    transitionDuration: 2000, //miliseconds,
    fetching: false,
    showDrawerAndCards: false,
    currentHover: "/",
    currentTheme: "dark"
}
export default (state = defaultState, action )=>{
    let newState = {...state};
    switch(action.type){
        case types.START_PAGE_TRANSITION: 
            newState.pageTransition = action.payload; 
            return newState;
        case types.FETCH_PROJECTS_START: 
            newState.fetching = true;
            return newState;
        case types.FETCH_PROJECTS_OK:
            newState.fetching = false;
            return newState;
        case types.FETCH_CATEGORIES_BAD:
            newState.fetching = false;
            return newState;
        case types.SHOW_DRAWER_AND_CARDS:
            newState.showDrawerAndCards = action.payload;
            return newState;
        case types.CURRENT_HOVER:  
            newState.currentHover= action.payload;
            return newState;
        case types.CURRENT_THEME:
            newState.currentTheme = action.payload;
            return newState;
        default: 
            return newState;
    }
}
