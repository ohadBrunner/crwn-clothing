import { UserActionsTypes } from './user.types'; // we use this to prevent typos

const INITIAL_STATE = {
  // null beofre any user is logged in
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  // checking to see if the action is setCurrentUser
  switch (action.type) {
    case UserActionsTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
