
// const ChangeAction = (name) => {
//     return {
//         type: 'CHANGE_NAME',
//         payload: name
//     }
// }


export const ChangeAction = () => {
    return async (dispatch) => {

        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const res2 = await data.json()
        dispatch({
            type: 'CHANGE_NAME',
            payload: res2[0].name
        })
    }
}

export const AddWishAction = () => {
    return {
        type: 'ADD_NEW_FRUIT',
        payload: 'code'
    }
}


export default ChangeAction;