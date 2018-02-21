
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
        case "ADD_PROJECTS": 
            newState.push(action.payload);
            break;
        default: 
        break;
    }
    return newState; 
}
