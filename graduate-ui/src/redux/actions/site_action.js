import { UPDATE_MENU } from '../actions/action_type'

const updateMenuAction = (payload) => {
    return {
        type: UPDATE_MENU,
        payload: payload
    }
}

export default updateMenuAction
