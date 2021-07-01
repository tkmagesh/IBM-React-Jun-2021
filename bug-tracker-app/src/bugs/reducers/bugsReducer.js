function bugsReducer(currentState = [], action){
    if (action.type === 'BUG_ADD'){
        return [...currentState, action.payload];
    }
    if (action.type === 'BUG_UPDATE'){
        const bugToReplace = action.payload;
        return currentState.map(bug => bug.id === bugToReplace.id ? bugToReplace : bug);
    }
    if (action.type === 'BUG_REMOVE'){
        return currentState.filter(bug => bug.id !== action.payload.id)
    }
    if (action.type === 'BUG_INIT'){
        return action.payload;
    }
    return currentState;
}
export default bugsReducer;