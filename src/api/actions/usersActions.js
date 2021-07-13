import { FETCH_USERS } from "../constants/constants";

export const fetchUsers = (users) => {
  return {
    type: FETCH_USERS,
    payload: users,
  };
};