import { COMMON_DATA } from '../actionTypes';
const initialState = {
    isConfirmatiom: false,
    common: {
        menu: 'default',
    }
}
function commonDataReducers(state = initialState, action) {

    switch (action.type) {
        case COMMON_DATA:
            return {
                ...state,
                isConfirmatiom: true,
                common: action.payload,
            }
        default:
            return state
    }
}
export default commonDataReducers;