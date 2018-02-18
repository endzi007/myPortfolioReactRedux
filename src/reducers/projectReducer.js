export const filterReducer = (state = [], action) => {
    let newState = [...state];
    switch (action.type) {
        case "FILTER_PROJECTS": 
        newState.push(action.payload);
        break;
        default: 
        break;
    }
    return newState; 
} 

export const projectReducer = (state = [], action) => {
    let newState = [...state];
    switch (action.type) {
        case "ADD_PROJECTS": 
            newState.push(action.payload);
            break;
        default: 
        break;
    }
    return newState; 
}
