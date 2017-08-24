import { SELECT_PURE_OR_LF } from './actions';
import { combineReducers } from 'redux';

function initialSelect(state = [], action){
    switch(action.type){
        case SELECT_PURE_OR_LF:
            return Object.assign({}, state, {
                SELECT_PURE_OR_LF: action.state
            })
        default: return state;
    }
}

const JStudy = combineReducers({
    initialSelect
})

export default JStudy;