
const nameReducers = (state = '', action) => {
    if (action.type === 'CHANGE_NAME') {
        console.log("asdasd", action)
        // return {
        //     ...state,
        //     name: action.payload
        // }
        return action.payload
    }
    return state;
}

export default nameReducers;