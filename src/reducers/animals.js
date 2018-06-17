import { RECEIVE_ANIMAL } from '../actions';
export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ANIMAL:
      return [      
        {...state,
          name : action.name,
        present : true}
      ];
    default:
      return state;
  }
};
