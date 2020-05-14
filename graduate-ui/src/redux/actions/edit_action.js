import { GET_EDIT_DATA } from '../actions/action_type'

const editAction = (payload) => {
    return {
        type: GET_EDIT_DATA,
        payload: payload
    }
}

export default editAction