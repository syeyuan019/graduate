import { GET_PICTURE } from '../actions/action_type'

const pictureAction = (payload) => {
    return {
        type: GET_PICTURE,
        payload: payload
    }
}

export default pictureAction