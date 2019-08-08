import { combineReducers } from 'redux';
import {searchReducers} from './search.reducer'
import {configReducers} from './config.reducer'
import {postReducers} from './post.reducer'
import {mapReducers} from './map.reducer'
const appReducers = combineReducers({
    searchReducers,
    configReducers,
    postReducers,
    mapReducers
});
export default appReducers;