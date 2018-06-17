import { combineReducers } from 'redux'
import name from './name';
import presenceFilter from './presenceFilter';
import animals from './animals';

export default combineReducers({
  name, presenceFilter,animals
});

export {name,presenceFilter,animals}
