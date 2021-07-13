import { FETCH_USERS } from "../constants/constants";

const initialState = {
  users: [],
};

export const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USERS:
      return { ...state, users: payload };
    default:
      return state;
  }
};
