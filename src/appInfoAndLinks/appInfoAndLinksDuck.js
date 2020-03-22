export const defaultState = {
    contact: {
        email: "jasarovic.enis@gmail.com",
        github: "https://www.github.com/endzi007",
        linkedIn: "https://www.linkedin.com/in/enis-jašarović",
        homePage: "https://enisjasarovic.me"
    }
}

export default (state = defaultState, action)=>{
    let newState = {...state};
    switch (action.payload){
        default: 
            return newState;
    }
}