export const types = {
    START_PAGE_TRANSITION: "appConfig/START_PAGE_TRANSITION",
    FETCH_PROJECTS_START: "appConfig/FETCH_PROJECTS_START",
    FETCH_PROJECTS_OK: "appConfig/FETCH_PROJECTS_OK",
    FETCH_CATEGORIES_BAD: "appConfig/FETCH_CATEGORIES_BAD"


}


export const creators = {
    startPageTransition: (start)=>({type: types.START_PAGE_TRANSITION, payload: start}),

}

export let defaultState = {
    pageTransition: false, //when true start page fade out animation 
    transitionDuration: 2000, //miliseconds,
    fetching: false
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
        default: 
            newState.fetching = false;
            return newState;
    }
}
