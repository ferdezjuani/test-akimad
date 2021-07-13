import { combineReducers } from "redux";
import { usersReducer } from "../reducers/usersReducer";

const reducers = combineReducers({
  users: usersReducer,
});

export default reducers;
