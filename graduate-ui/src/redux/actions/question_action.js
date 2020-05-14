
import { SELECT_QUESTION_TYPE } from '../actions/action_type'

const questionTypeAction = (list) => {
    return {
        type: SELECT_QUESTION_TYPE,
        payload: list
    }
}

export default questionTypeAction