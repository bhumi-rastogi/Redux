const initialLikes = {
    likes:0
}

const reducer = (state=initialLikes,action) => {
    switch(action.type){
        case "DECREMENT_LIKE":
            return {...state,likes:state.likes-1};
        case "INCREMENT_LIKE":
            return {...state,likes:state.likes+1};
        default:
                return state;
    }
}

export default reducer;