import { createSelector } from "reselect";

const getState = state => state;
const getPresence = state => state.presenceFilter;

const getVisiableAnimals = createSelector(getState, getPresence, (state, presence) =>
  {

  if(presence==='present'){
    return state.animals.filter((a) => a.present === true);
  }
  if(presence==='absent'){
    return state.animals.filter((a) => a.present === false);
  }

  return state.animals; 
  });

export default getVisiableAnimals;

