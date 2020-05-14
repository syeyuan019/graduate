import { LOAD_DATA } from '../actions/action_type'

const uploadAction = (payload) => {
    return {
        type: LOAD_DATA,
        payload: payload
    }
}

export default uploadAction