export const defaultState = {
    contact: {
        email: "jasarovic.enis@gmail.com",
        github: "https://www.github.com/endzi007",
        linkedIn: "https://www.linkedin.com/in/enis-jašarović",
        homePage: "https://enisjasarovic.me",
        buyMeACoffe: "https://www.buymeacoffee.com/endzi007",
        paypal: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=D5JUMPRBTANCG&source=url",
        resume: "https://docs.google.com/document/d/1ngOY5p-xj_BntgahRwza_8gwEGDCbHQ3tjN934Io1UA/edit?usp=sharing"
    }
}

export default (state = defaultState, action)=>{
    let newState = {...state};
    switch (action.payload){
        default: 
            return newState;
    }
}