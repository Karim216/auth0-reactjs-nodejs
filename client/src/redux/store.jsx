import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import reducerFetchAllUsers from "./reducers/users/reducerFetchAllUsers";
import reducerFetchCurrentUser from "./reducers/users/reducerFetchCurrentUser";
import reducerFetchTokens from "./reducers/tokens/reducerFetchTokens";

const rootreducer = combineReducers({
  currentUser: reducerFetchCurrentUser,
  allUsers: reducerFetchAllUsers,
  tokens: reducerFetchTokens, 
});

const store = createStore(rootreducer, applyMiddleware(thunk));

export default store;
