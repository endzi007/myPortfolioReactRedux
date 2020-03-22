export const types = {
    FILTER_PROJECTS: "projects/FILTER_PROJECTS",
    FETCH_PROJECTS_START: "projects/FETCH_PROJECTS_START",
    FETCH_PROJECTS_OK: "projects/FETCH_PROJECTS_OK",
    FETCH_PROJECTS_FAILED: "projects/FETCH_PROJECTS_FAILED",
    ADD_PROJECTS_TO_STORE: "projects/ADD_PROJECTS_TO_STORE"
}

export const creators = {
    filterProjects: (tag)=>({ type: types.FILTER_PROJECTS, payload: tag}),
    addProjectsToStore: (data)=>({type: types.ADD_PROJECTS_TO_STORE, payload: data})
}

export let defaultState = {
    projects: [],
    filterTags: []
}
export default (state = defaultState, action )=>{
    let newState = {...state};
    switch(action.type){
        case types.ADD_PROJECTS_TO_STORE:
            newState.projects=action.payload;
            return newState;
        case types.FILTER_PROJECTS:
            if(newState.filterTags.indexOf(action.payload)===-1){
                newState.filterTags.push(action.payload);
            } else {
                newState.filterTags.splice(newState.filterTags.indexOf(action.payload), 1);
            }
            return newState;
        default: 
            return newState
    }
}



export const fetchProjects = () => {
    return (dispatch, getState)=>{
        dispatch({type: types.FETCH_PROJECTS_START});
        return new Promise((resolve, reject)=>{
            try{
                fetch("https://public-api.wordpress.com/rest/v1.1/sites/enisportfolio.wordpress.com/posts").then((response)=>{
                    return response.json();
                }).then((data)=>{
                    var escapeChars = { lt: '<', gt: '>', quot: '"', apos: "'", amp: '&' };

                    //replace &#8217 to ' and few more.. 

                    function unescapeHTML(str) {
                        return str.replace(/\&([^;]+);/g, function(entity, entityCode) {
                            var match;
                            if ( entityCode in escapeChars) {
                                return escapeChars[entityCode];
                            } else if ( match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
                                return String.fromCharCode(parseInt(match[1], 16));
                            } else if ( match = entityCode.match(/^#(\d+)$/)) {
                                return String.fromCharCode(~~match[1]);
                            } else {
                                return entity;
                            }
                        });
                    }
                    let objects= [];
                    data.posts.map((post)=>{
                        let obj = {};
                        let arr = post.content.substr(3, post.content.length-8).split("|");
                        obj["id"]= post.ID;
                        obj["content"]= unescapeHTML(arr[0]);
                        obj["title"]= post.title;
                        obj["image"]= post.featured_image;
                        obj["github"]= arr[1];
                        obj["link"]= arr[2];
                        let tagsArr = [];
                        for (const tag in post.tags) {
                            if(tagsArr.indexOf(tag)===-1){
                                tagsArr.push(tag);
                            }
                        }
                        obj.tags = tagsArr;
                        objects.push(obj);
                    });
                    
                    resolve({
                        type: types.FETCH_PROJECTS_OK,
                        payload: objects
                    });
                }).catch((e)=>{
                    resolve({
                        type: types.FETCH_PROJECTS_FAILED,
                        payload: e
                    });
                    
                });
            } catch(e){
                resolve({
                    type: types.FETCH_PROJECTS_FAILED,
                    payload: e
                });
            }
        });
    }
}