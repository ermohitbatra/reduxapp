const reducer = (state = 0, action) => {
    if(action.type === 'increase'){
        return state + action.payload
    }
    else if(action.type === 'decrese'){
        return state - action.payload
    }
    else{
        return state
    }
}

export default reducer