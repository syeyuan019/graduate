import { GET_PICTURE } from '../actions/action_type'

const initState = {
    status: "",
    model: []
}

const pictureReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_PICTURE: 
            return {
                state: action.payload
            }
        default:
            return state
    }
}

export default pictureReducer