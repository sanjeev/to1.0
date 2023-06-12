import * as types from './actionTypes';
export function commonData(payload) {

    return {
        type: types.COMMON_DATA,
        payload: payload,
    }
}