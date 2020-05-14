import { UPDATE_MENU } from '../actions/action_type'

const initState = {
    siteTypeOne: "古籍",
    siteTypeTwo: "医"
}

const siteReducer = (state = initState, action) => {
    switch(action.type) {
        case UPDATE_MENU:
            state = action.payload; 
            return state
            // return {
            //     state: action.payload
            // }
        default:
            return state
    }
}

export default siteReducer