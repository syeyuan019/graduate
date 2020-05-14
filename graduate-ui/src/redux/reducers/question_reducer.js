import { SELECT_QUESTION_TYPE } from '../actions/action_type'

const questionReducer = (state = {}, action) => {
    switch(action.type) {
        case SELECT_QUESTION_TYPE: 
            return action.payload
        default:
            return state
    }
}

export default questionReducer