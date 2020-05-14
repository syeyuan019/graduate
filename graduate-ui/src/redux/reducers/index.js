import { combineReducers } from 'redux'// 合并reducer，createStore只能接受一个reducer
import site from './site_reducer'
import question from './question_reducer'
import picture from './picture_reducer'
import edit from './edit_reducer'
import base from './base_reducer'

export default combineReducers({
    site,
    question,
    picture,
    edit,
    base
})