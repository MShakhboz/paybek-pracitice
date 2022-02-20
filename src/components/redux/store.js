import { createStore, combineReducers } from 'redux';
import SignInReducer from './reducers/SignInReducer';
import AddDataReducer from './reducers/AddDataReducer';
import FilterUserReduce from './reducers/FilterUserReduce';

const combinedReducers = combineReducers(
    {
        signIn: SignInReducer,
        addDataForm: AddDataReducer,
        filteredData: FilterUserReduce,
    }
)

const store = createStore(combinedReducers);

export default store;