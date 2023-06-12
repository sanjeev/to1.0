import storage from "redux-persist/lib/storage";
import { combineReducers } from 'redux'
import { persistReducer } from "redux-persist";
import commonData from './commonDataReducers'
const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    commonData: commonData,
});

export default persistReducer(persistConfig, rootReducer);