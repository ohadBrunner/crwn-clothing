// this function return an action object
export const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER',
  payload: user,
});