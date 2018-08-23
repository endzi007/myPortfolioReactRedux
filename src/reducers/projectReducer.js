
export const filterReducer = (state = [], action) => {
    let newState = [...state];
    switch (action.type) {
        case "FILTER_PROJECTS":
        if(newState.indexOf(action.payload)===-1){
            newState.push(action.payload);
        } else {
            newState.splice(newState.indexOf(action.payload), 1);
        }
        break;
        default: 
        break;
    }
    return newState; 
} 

export const projectReducer = (state = [], action) => {
    let newState = [...state];
    switch (action.type) {
        case "ADD_PROJECTS_TO_STORE":
            newState=action.payload;
            break;
        default: 
        break;
    }
    return newState; 
}

export const fetchReducer = (state=false, action)=>{
    switch(action.type){
        case "FETCH_PROJECTS_START": 
            state = true;
            break;
        case "FETCH_PROJECTS_OK":
            state = false;
            break;
        case "FETCH_CATEGORIES_BAD":
            state = false;
            break;
        default: 
            state = false;
            break;
    }
    return state;
}

export const appConfigReducer = (state = {
    pageTransition: false,
    transitionDuration: 0.7
}, action) =>{
    let newState = {...state};
    switch (action.type){
        case "START_PAGE_TRANSITION":
            newState.pageTransition = action.payload; 
            break;
        default:
            break;
    }
    return newState;
}