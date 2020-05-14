import { LOAD_DATA } from '../actions/action_type'

const initState = {
    data: ""
}

const baseReducer = (state = initState, action) => {
    switch(action.type) {
        case LOAD_DATA: 
            state = action.payload; 
            return state
        default:
            return state
    }
}

export default baseReducer