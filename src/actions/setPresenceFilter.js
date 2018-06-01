export const SET_PRESENCE_FILTER = 'SET_PRESENCE_FILTER';
export const setPresenceFilter = (name) => ({
  type: SET_PRESENCE_FILTER,
  name,
  filter:name
});
