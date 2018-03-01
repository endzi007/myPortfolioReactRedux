export const filterProjects = (tag) => {
    return {
        type: "FILTER_PROJECTS",
        payload: tag
    }
}

export const pageTransition = (startStop) => {
    return {
        type: "PAGE_TRANSITION",
        payload: startStop
    }
}