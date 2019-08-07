import { combineReducers } from 'redux';
import {searchReducers} from './search.reducer'
import {configReducers} from './config.reducer'
import {postReducers} from './post.reducer'
const appReducers = combineReducers({
    searchReducers,
    configReducers,
    postReducers
});
export default appReducers;