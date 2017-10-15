import { INCREMENT, DECREMENT, SET_DIFF, RESET } from '../actions';
import { combineReducers } from 'redux';

/*  초기 상태 정의 */
const counterInitialState = {
    value: 0,
    diff: 1
};

const counter = (state = counterInitialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + state.diff
            });
        case DECREMENT:
            return Object.assign({}, state, {
                value: state.value - state.diff
            });
        case SET_DIFF:
            return Object.assign({}, state, {
                diff: action.diff
            });
        case RESET:
            return Object.assign({}, state, {
                value: state.value = 0
            });
        default:
            return state;
    }
};


const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

const counterApp = combineReducers({
    counter,
    extra
});

export default counterApp;
