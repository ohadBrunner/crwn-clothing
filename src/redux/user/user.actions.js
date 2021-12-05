import { UserActionsTypes } from './user.types';

// this function return an action object
export const setCurrentUser = user => ({
  type: UserActionsTypes.SET_CURRENT_USER, // WHAT to do?
  payload: user, // WHO is the user (the actual data)
});
