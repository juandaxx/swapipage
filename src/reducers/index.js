import {dataIsLoading, dataFetchSuccess, dataHasErrored} from './planets.reducer';
import { combineReducers } from 'redux';


const allReducers = combineReducers({
    dataIsLoading,
    dataFetchSuccess,
    dataHasErrored
});

export default allReducers;