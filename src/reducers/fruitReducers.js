
const fruitReducers = (state = [], action) => {
    if (action.type === 'ADD_NEW_FRUIT') {
        console.log("asdasdaaaaaaa", action)
        return [
            ...state,
            'code'
        ]
    }
    return state;
}

export default fruitReducers;