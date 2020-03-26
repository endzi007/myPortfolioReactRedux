export const defaultState = {
    contact: {
        email: "jasarovic.enis@gmail.com",
        github: "https://www.github.com/endzi007",
        linkedIn: "https://www.linkedin.com/in/enis-jašarović",
        homePage: "https://enisjasarovic.me",
        buyMeACoffe: "https://www.buymeacoffee.com/Pxmybaw",
        paypal: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=D5JUMPRBTANCG&source=url"
    }
}

export default (state = defaultState, action)=>{
    let newState = {...state};
    switch (action.payload){
        default: 
            return newState;
    }
}