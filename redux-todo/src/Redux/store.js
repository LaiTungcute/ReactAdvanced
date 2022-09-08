import { combineReducers, createStore } from 'redux'
import reducer from './reducer'

const rootStore = combineReducers({
    todo: reducer
});

const store = createStore(rootStore);
export default store;