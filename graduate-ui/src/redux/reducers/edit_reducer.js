import { GET_EDIT_DATA } from '../actions/action_type'

const initState = {
    data: ""
}

const editReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_EDIT_DATA: 
            state = action.payload; 
            return state
        default:
            return state
    }
}

export default editReducer